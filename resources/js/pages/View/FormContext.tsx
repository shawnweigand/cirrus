import { createContext, ReactNode, useContext, useEffect } from "react";
import { set, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useReactForm } from "react-hook-form"
import { toast } from "sonner"
import { useForm as useInertiaForm } from '@inertiajs/react'
import jexl from 'jexl';
import TextField from "./TextField";
import OptionField from "./OptionField";
import MultiField from "./MultiField";
import type { ReactElement } from "react";

interface Schema {
    title: string;
    path: string;
    content: Array<App.Data.Form.FieldData>;
}

// Define types
interface FormContextType {
    rawSchema: Schema;
    formSchema: z.ZodObject<any>;
    form: UseFormReturn<any>;
    selectField: (field: App.Data.Form.FieldData, index: number) => ReactElement | null;
    evaluateCondition: (condition: string, formData?: {
        [x: string]: any;
    }) => any
    errors: Partial<Record<"validation" | "data", string>>
    processing: boolean;
    validated: Record<string, boolean>;
    setValidated: (value: Record<string, boolean>) => void;
    onSubmit: (data: z.infer<ZodType<any, any, any>>) => void;
    onFormDownload: () => void;
}

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider
type ExtendedPageProps = {
    children: ReactNode;
    rawSchema: Schema;
    validated: Record<string, boolean>;
    setValidated: (value: Record<string, boolean>) => void;
    allFormData: Record<string, any>;
    setAllFormData: (value: Record<string, any>) => void;
    onDownload: (downloadData: object) => void
}

// Additional JEXL functions
jexl.addFunction('includes', (array, value) => {
  return Array.isArray(array) && array.includes(value);
});

export const FormContextProvider = ({ children, rawSchema, validated, setValidated, allFormData, setAllFormData, onDownload }: ExtendedPageProps) => {

    // Schema builder
    let formSchema = z.object(Object.fromEntries(
        rawSchema.content?.map(field => {
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

    // Form builder
    let form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            rawSchema.content?.map(field => {
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

    // Load field components
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

    // JEXL condition evaluation
    let evaluateCondition = (condition: string, formData = form.getValues()) => {
        return jexl.evalSync(condition, {form: formData})
    }

    // Inertia form
    const { data, setData, post, processing, errors, transform, reset } = useInertiaForm({
        'data': {},
        'validation': {}
    });

    // Transform form data before submission
    const transformData = () => {
        const values = form.getValues()

        const filteredFields = rawSchema.content.filter(field => {
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

    // Updated validated fields on form change
    useEffect(() => {
        form.watch((values, { name, type }) => {
            // console.log(`Field changed: ${name}, Type: ${type}, Values:`, values);
            setValidated({
                ...validated,
                [rawSchema.title]: false
            });
        })
    }, [form.watch])

    // Submit
    const onSubmit = (formData: z.infer<typeof formSchema>) => {
        // console.log("Data to be sent:", data);
        post(route('validate'), {
            preserveScroll: true,
            onSuccess: (response) => {
                setValidated({
                    ...validated,
                    [rawSchema.title]: true
                });
                // toast("You submitted the following values:", {
                //     description: (
                //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                //             <code className="text-white">{JSON.stringify(transformData().data, null, 2)}</code>
                //         </pre>
                //     ),
                // });
                toast.success(`Values for ${rawSchema.title} have been validated.`)
                setAllFormData({
                    ...allFormData,
                    ...(transformData().data)
                })
                reset();
            },
            onError: (error) => {
                setValidated({
                    ...validated,
                    [rawSchema.title]: false
                });
                for (const [key, value] of Object.entries(error)) {
                    toast.error(value);
                }
            }
        })
    }

    // Download
    const onFormDownload = () => {
        onDownload(transformData().data)
    }

    return (
      <FormContext.Provider value={{ rawSchema, formSchema, selectField, evaluateCondition, form, errors, processing, validated, setValidated, onSubmit, onFormDownload }}>
        {children}
      </FormContext.Provider>
    );
  };

// Custom hook for consuming
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error('useFormContext must be used within a FormContextProvider');
    }
    return context;
};
