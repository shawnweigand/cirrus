import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "./TextField";

interface Schema {
    title: string;
    path: string;
    content: Array<App.Data.Form.FieldData>;
}

type ExtendedPageProps = {
    schema: Schema
 }

export default function Form({ schema }: ExtendedPageProps) {

    let evaluatedFormFields = schema.content ?? []

    let formSchema = z.object(Object.fromEntries(
        evaluatedFormFields.map(field => {
            switch (field.type) {
                case "text":
                    return [field.id, z.string()];
                default:
                    return [field.id, z.any()]; // fallback
            }
        })
    ))

    let form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            evaluatedFormFields.map(field => {
                switch (field.type) {
                    case "text":
                        return [field.id, field.default ?? ""];
                    default:
                        return [field.id, null]; // fallback
                }
            })
        )
    })

    const selectField = (field: App.Data.Form.FieldData, index: number) => {
        switch (field.type) {
            case 'text':
                return <TextField templateField={field} form={form} key={index} />
            default:
                return null;
        }
    }

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Form submitted with data:", data);

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${schema.title}.auto.tfvars.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <ReactForm {...form}>

        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                {evaluatedFormFields?.map((field, index) => {
                    return selectField(field, index)
                })}
                <Button type="submit">Submit</Button>
            </form>
        </div>

        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(schema, null, 2)}</code>
        </pre>

        </ReactForm>
      )
}
