import TextField from "./TextField";
import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { useFormContext } from "./FormContext";

type ExtendedPageProps = { }

export default function Form({ }: ExtendedPageProps) {

    const { rawTemplate, evlauatedFormFields, form, onSubmit } = useFormContext()

    const selectField = (field: App.Data.Form.FieldData) => {
        switch (field.type) {
            case 'text':
                return <TextField templateField={field} />
            default:
                return null;
        }
    }

    return (
        <ReactForm {...form}>

        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                {evlauatedFormFields?.map(field => {
                    return selectField(field)
                })}
                <Button type="submit">Submit</Button>
            </form>
        </div>

        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(rawTemplate, null, 2)}</code>
        </pre>

        </ReactForm>
      )
}