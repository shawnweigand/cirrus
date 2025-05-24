import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "./FormContext";

type ExtendedPageProps = {
    templateField: App.Data.Form.TextFieldData
}

export default function TextField({ templateField }: ExtendedPageProps) {

    const { form } = useFormContext()

    return (
        <FormField
              control={form.control}
              name={templateField.id}
              render={({ field }) => (
                <FormItem>
         <FormLabel>{templateField.label}</FormLabel>
                  <FormControl>
                    <Input placeholder={templateField.default ?? ""} {...field} />
                  </FormControl>
                  <FormDescription>
                    {templateField.description}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
        />
    );
}
