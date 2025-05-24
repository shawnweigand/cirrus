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

          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            {evlauatedFormFields?.map(field => {
                return selectField(field)
            })}
            <Button type="submit">Submit</Button>
          </form>

            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(rawTemplate, null, 2)}</code>
            </pre>

        </ReactForm>
      )
}