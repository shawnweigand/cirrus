import React, { useState } from "react";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { MultiSelect } from "@/components/ui/multi-select";
import { UseFormReturn } from "react-hook-form";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const frameworksList = [
  { value: "react", label: "React", icon: Turtle },
  { value: "angular", label: "Angular", icon: Cat },
  { value: "vue", label: "Vue", icon: Dog },
  { value: "svelte", label: "Svelte", icon: Rabbit },
  { value: "ember", label: "Ember", icon: Fish },
];

type ExtendedPageProps = {
    templateField: App.Data.Form.MultiFieldData
    form: UseFormReturn<any>
}

export default function MultiField({ templateField, form }: ExtendedPageProps) {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);

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
