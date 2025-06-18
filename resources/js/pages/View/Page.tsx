import { useEffect, useState } from "react";
import Form from "./Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm as useInertiaForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Toaster } from '@/components/ui/sonner';
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AlertCircle, CheckCircle, DownloadIcon } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

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
    const [filenamePrefix, setFilenamePrefix] = useState("variables")

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

    const { data, setData, post, processing, errors, transform, reset } = useInertiaForm({});

    const onDownload = () => {
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${filenamePrefix}.auto.tfvars.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full max-w-4xl flex-col gap-6">
            {schemas.length > 0 &&
                <Tabs defaultValue={schemas[0].title} onValueChange={tab => setActiveSchema(schemas.find(schema => schema.title === tab) ?? activeSchema)} className="w-full pt-16">
                    <div className="flex items-center justify-between">
                        <TabsList>
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
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button type="button" onClick={onDownload} variant="secondary" className="cursor-pointer" disabled={!Object.values(validated).some(Boolean)}>
                                    <DownloadIcon className="h-4 w-4" />
                                    Download all valid templates
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80 text-sm flex items-center whitespace-nowrap">
                                <span className="text-muted-foreground">Download as</span>
                                <Input value={filenamePrefix} onChange={(e) => setFilenamePrefix(e.target.value)} className="ml-2 h-auto py-0 pl-1 text-right italic text-gray-400 text-xs" />
                                <span className="italic text-gray-400">.auto.tfvars.json</span>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <TabsContent value={activeSchema.title} key={activeSchema.title}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{activeSchema.title}</CardTitle>
                                    {/* <CardDescription>This is a description of the module</CardDescription> */}
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <Form key={activeSchema.title} schema={activeSchema} validated={validated} setValidated={setValidated} parentData={data} setParentData={setData} />
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
