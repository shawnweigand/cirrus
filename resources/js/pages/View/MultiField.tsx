import { MultiSelect } from "@/components/ui/multi-select";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

type ExtendedPageProps = {
    templateField: App.Data.Form.MultiFieldData
    form: UseFormReturn<any>
}

export default function MultiField({ templateField, form }: ExtendedPageProps) {

  return (
    <FormField
        control={form.control}
        name={templateField.id}
        render={({ field }) => (
            <FormItem>
                <FormLabel>{templateField.label}</FormLabel>
                <FormDescription>{templateField.description}</FormDescription>
                <FormControl>
                    <MultiSelect
                        options={templateField.options as App.Data.Form.OptionFieldOptionsData[]}
                        onValueChange={field.onChange}
                        defaultValue={templateField.default}
                        placeholder="Select options..."
                        variant="inverted"
                        animation={2}
                        maxCount={4}
                    />
                </FormControl>
                <FormLabel className="text-xs text-muted-foreground">{templateField.id}</FormLabel>
                <FormMessage />
            </FormItem>
        )}
    />
  );
}
