import { createContext, ReactNode, useContext } from "react";
import { set, UseFormReturn } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm as useReactForm } from "react-hook-form"
import { toast } from "sonner"
import { Field } from "@headlessui/react";
import { usePage } from "@inertiajs/react";
import { SharedData } from "@/types";
import { useForm } from '@inertiajs/react'

// Define types
interface FormContextType {
    rawTemplate: App.Data.TemplateData;
    evlauatedFormFields: Array<App.Data.Form.FieldData> | null;
    formSchema: z.ZodObject<any>;
    form: UseFormReturn<any>;
    errors: Partial<Record<keyof FormData, string>>;
    processing: boolean;
    onSubmit: (data: z.infer<ZodType<any, any, any>>) => void;
}

// Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// Provider
type ExtendedPageProps = {
    children: ReactNode
    rawTemplate: App.Data.TemplateData
}

export const FormContextProvider = ({ children, rawTemplate }: ExtendedPageProps) => {

    const { org } = usePage<SharedData>().props;

    // Form fields -> evaluate the form conditions and return valid
    let evlauatedFormFields = rawTemplate.form ?? []

    // Schema builder
    const formSchema = z.object(Object.fromEntries(
        evlauatedFormFields.map(field => {
            switch (field.type) {
                case "text":
                    return [field.id, z.string()];
                default:
                    return [field.id, z.any()]; // fallback
            }
        })
    ))
    // Add after z.string() for other validation
    // .min(2, {
    //   message: "Username must be at least 2 characters.",
    // }),

    // Form builder
    const form = useReactForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: Object.fromEntries(
            evlauatedFormFields.map(field => {
                switch (field.type) {
                    case "text":
                        return [field.id, field.default ?? ""];
                    default:
                        return [field.id, null]; // fallback
                }
            })
        )
    })

    const { data, setData, post, processing, errors, reset } = useForm(form.getValues());

    // Submit
    function onSubmit(formData: z.infer<typeof formSchema>, event?: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        // setData({...formData, 'template_slug': rawTemplate.slug, 'template_version': rawTemplate.version });
        post(route('org.submissions.store', org.current.slug), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast("You submitted the following values:", {
                    description: (
                        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
                        </pre>
                    ),
                })
            },
            onError: (error) => {
                toast.error(`Error submitting form: ${error.message}`);
            },
        });
    }

    return (
      <FormContext.Provider value={{ rawTemplate, evlauatedFormFields, formSchema, form, errors, processing, onSubmit }}>
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
