import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

type ExtendedPageProps = {
    templateField: App.Data.Form.OptionFieldData
    form: UseFormReturn<any>
}

export default function OptionField({ templateField, form }: ExtendedPageProps) {

    return (
        <FormField
              control={form.control}
              name={templateField.id}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{templateField.label}</FormLabel>
                  <FormDescription>{templateField.description}</FormDescription>
                    <Popover>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                variant="outline"
                                role="combobox"
                                // aria-expanded={open}
                                className={cn(
                                    "w-[200px] justify-between",
                                    !field.value && "text-muted-foreground"
                                )}
                                >
                                {field.value
                                    ? templateField.options?.find((option) => (option.value ?? '') === field.value)?.label
                                    : (templateField.default.label ?? "Select option...")}
                                    <ChevronsUpDown className="opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                        <Command>
                        <CommandInput placeholder="Search options..." className="h-9" />
                        <CommandList>
                            <CommandEmpty>No option found.</CommandEmpty>
                            <CommandGroup>
                            {templateField.options?.map((option, index) => (
                                <CommandItem
                                    key={option.value ?? index}
                                    value={option.value ?? ''}
                                    onSelect={() => {
                                        form.setValue(templateField.id, option.value)
                                    }}
                                >
                                {option.label}
                                <Check
                                    className={cn(
                                    "ml-auto",
                                    field.value === option.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                </CommandItem>
                            ))}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                    </Popover>
                  <FormLabel className="text-xs text-muted-foreground">{templateField.id}</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
        />
    );
}
