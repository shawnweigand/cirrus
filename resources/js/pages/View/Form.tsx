import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useFormContext } from "./FormContext";

type ExtendedPageProps = {
}

export default function Form({ }: ExtendedPageProps) {

    const { rawSchema, selectField, evaluateCondition, form, processing, validated, onSubmit, onFormDownload } = useFormContext()

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
                    {rawSchema.content?.map((field, index) => {
                        if (evaluateCondition(field.condition ?? 'true')) {
                            return selectField(field, index)
                        }
                    })}
                </div>
                <div className="w-1/5 flex justify-between my-16">
                    <Button type="submit" className="cursor-pointer" disabled={processing}>Validate</Button>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button type="button" onClick={onFormDownload} variant="secondary" className="cursor-pointer" disabled={!validated[rawSchema.title]}>
                                <DownloadIcon className="h-4 w-4" />
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 text-sm flex justify-center">
                            Download as
                            <p className="ml-1 italic text-gray-400">{rawSchema.title}.auto.tfvars.json</p>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </form>
        </div>

        {/* <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(schema, null, 2)}</code>
        </pre> */}

        </ReactForm>
      )
}
