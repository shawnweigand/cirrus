import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { z } from "zod";
import { set, useForm as useReactForm } from "react-hook-form"
import { useForm as useInertiaForm } from "@inertiajs/react";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "./TextField";
import { DownloadIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { on } from "events";
import { toast } from "sonner"
import OptionField from "./OptionField";
import MultiField from "./MultiField";
import jexl from 'jexl';

interface Schema {
    title: string;
    path: string;
    content: Array<App.Data.Form.FieldData>;
}

type ExtendedPageProps = {
    schema: Schema;
    validated: Record<string, boolean>;
    setValidated: (value: Record<string, boolean>) => void;
    parentData: Record<string, any>;
    setParentData: (value: Record<string, any>) => void;
}

jexl.addFunction('includes', (array, value) => {
  return Array.isArray(array) && array.includes(value);
});

export default function Form({ schema, validated, setValidated, parentData, setParentData }: ExtendedPageProps) {

    let formSchema = z.object(Object.fromEntries(
        schema.content?.map(field => {
            switch (field.type) {
                case "text":
                    return [field.id, z.string()];
                case "option":
                    return [field.id, z.union([z.string(), z.number()])];
                case "multi":
                    return [field.id, z.array(z.union([z.string(), z.number()]))];
                default:
                    return [field.id, z.any()]; // fallback
            }
        })
    ))

    let form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            schema.content?.map(field => {
                switch (field.type) {
                    case "text":
                        return [field.id, field.default ?? ""];
                    case "option":
                        return [field.id, field.default.value ?? ""];
                    case "multi":
                        return [field.id, field.default ?? []]
                    default:
                        return [field.id, null]; // fallback
                }
            })
        )
    })

    const selectField = (field: App.Data.Form.FieldData, index: number) => {
        switch (field.type) {
            case 'text':
                return <TextField templateField={field as App.Data.Form.TextFieldData} form={form} key={index} />
            case 'option':
                return <OptionField templateField={field as App.Data.Form.OptionFieldData} form={form} key={index} />
            case 'multi':
                return <MultiField templateField={field as App.Data.Form.MultiFieldData} form={form} key={index} />
            default:
                return null;
        }
    }

    const { data, setData, post, processing, errors, transform, reset } = useInertiaForm({
        'data': {},
        'validation': {}
    });

    useEffect(() => {
        form.watch((values, { name, type }) => {
            // console.log(`Field changed: ${name}, Type: ${type}, Values:`, values);
            setValidated({
                ...validated,
                [schema.title]: false
            });
        })
    }, [form.watch])

    const onSubmit = (formData: z.infer<typeof formSchema>) => {
        // console.log("Data to be sent:", data);
        post(route('validate'), {
            preserveScroll: true,
            onSuccess: (response) => {
                setValidated({
                    ...validated,
                    [schema.title]: true
                });
                toast("You submitted the following values:", {
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                            <code className="text-white">{JSON.stringify(transformData().data, null, 2)}</code>
                        </pre>
                    ),
                });
                setParentData({
                    ...parentData,
                    ...(transformData().data)
                })
                reset();
            },
            onError: (error) => {
                setValidated({
                    ...validated,
                    [schema.title]: false
                });
                for (const [key, value] of Object.entries(error)) {
                    toast.error(value);
                }
            }
        })
    }

    const onDownload = () => {
        const blob = new Blob([JSON.stringify(transformData().data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${schema.title}.auto.tfvars.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    let evaluateCondition = (condition: string, formData = form.getValues()) => {
        return jexl.evalSync(condition, {form: formData})
    }

    const transformData = () => {
        const values = form.getValues()

        const filteredFields = schema.content.filter(field => {
            try {
                return evaluateCondition(field.condition ?? "true", values)
            } catch (e) {
                console.error(`Error evaluating condition for field "${field.id}":`, e);
                return false;
            }
        });

        const filteredData = Object.fromEntries(
            filteredFields.map(field => [field.id, values[field.id]])
        );

        const filteredValidation = Object.fromEntries(
            filteredFields.map(field => [field.id, field.validation])
        );

        return {
            data: filteredData,
            validation: filteredValidation
        }
    }

    transform((data) => transformData());

    // const watchedValues = form.watch();

    // const evaluatedFormFields = useMemo(() => {
    //     console.log('evaluating...')
    //     return formFields.filter((field: App.Data.Form.FieldData) => {
    //         try {
    //             return jexl.evalSync(field.condition ?? 'true', {form: form.getValues()})
    //         } catch (e) {
    //             console.error(`Error evaluating condition for field "${field.id}":`, e);
    //             return false;
    //         }
    //     })
    // }, [watchedValues, formFields])

    return (
        <ReactForm {...form}>

        {/* {errors && Object.keys(errors).length > 0 && (
            <div className="w-full max-w-3xl mx-auto">
                <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
                    <h2 className="font-semibold">Validation Errors</h2>
                    <ul className="list-disc pl-5 mt-2">
                        {Object.entries(errors).map(([key, value]) => (
                            <li key={key}>{value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )} */}

        <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                <div className="space-y-16">
                    {schema.content?.map((field, index) => {
                        if (evaluateCondition(field.condition ?? 'true')) {
                            return selectField(field, index)
                        }
                    })}
                </div>
                <div className="w-1/5 flex justify-between my-16">
                    <Button type="submit" className="cursor-pointer" disabled={processing}>Validate</Button>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button type="button" onClick={onDownload} variant="secondary" className="cursor-pointer" disabled={!validated[schema.title]}>
                                <DownloadIcon className="h-4 w-4" />
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 text-sm flex justify-center">
                            Download as
                            <p className="ml-1 italic text-gray-400">{schema.title}.auto.tfvars.json</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </form>
        </div>

        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(schema, null, 2)}</code>
        </pre>

        </ReactForm>
      )
}
