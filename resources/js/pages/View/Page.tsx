import { useEffect, useState } from "react";
import Form from "./Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm as useInertiaForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Toaster } from '@/components/ui/sonner';
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle, CheckCircle } from "lucide-react";

type ExtendedPageProps = { }

interface Schema {
    title: string;
    path: string;
    content: Array<App.Data.Form.FieldData>;
}

export default function Page({ }: ExtendedPageProps) {

    const [validated, setValidated] = useState({} as Record<string, boolean>);
    const [schemas, setSchemas] = useState([] as Array<Schema>);
    const [activeSchema, setActiveSchema] = useState({
        title: '',
        path: '',
        content: [] as Array<App.Data.Form.FieldData>
    });

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === 'LOAD_SCHEMAS') {
                setSchemas(event.data.schemas);
            }
        };

        window.addEventListener('message', handleMessage);

        window.parent.postMessage({ type: 'REQUEST_SCHEMAS' }, '*');

        return () => window.removeEventListener('message', handleMessage);
    }, []);

    useEffect(() => {
        if (schemas.length > 0) {
            setValidated(Object.fromEntries(schemas.map(schema => [schema.title, false])));
            setActiveSchema(schemas[0]);
        }
    }, [schemas]);

    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full max-w-4xl flex-col gap-6">
            {schemas.length > 0 &&
                <Tabs defaultValue={schemas[0].title} onValueChange={tab => setActiveSchema(schemas.find(schema => schema.title === tab) ?? activeSchema)} className="w-full pt-16">
                    <div className="flex items-center justify-between">
                        <TabsList>
                            {/* Show if they have been validated - pass this down for each download validated/setValidated */}
                            {/* Rn, switching forms undoes the validated in the other field */}
                            {schemas.map((schema, index) => (
                                <TabsTrigger className="cursor-pointer flex items-center gap-1" value={schema.title} key={index}>
                                    {schema.title}
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            {validated[schema.title] ? (
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            ) : (
                                                <AlertCircle className="h-4 w-4 text-red-500" />
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {validated[schema.title] ? "Template is valid" : "Template has not been validated"}
                                        </TooltipContent>
                                    </Tooltip>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <Button className="cursor-pointer">
                            Download validated templates
                        </Button>
                    </div>
                    <TabsContent value={activeSchema.title} key={activeSchema.title}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{activeSchema.title}</CardTitle>
                                    {/* <CardDescription>This is a description of the module</CardDescription> */}
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <Form key={activeSchema.title} schema={activeSchema} validated={validated} setValidated={setValidated} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            }
            </div>
            <Toaster richColors />
        </div>
    )
}
