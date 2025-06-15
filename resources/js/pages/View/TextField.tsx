import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

type ExtendedPageProps = {
    templateField: App.Data.Form.TextFieldData
    form: UseFormReturn<any>
}

export default function TextField({ templateField, form }: ExtendedPageProps) {

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
