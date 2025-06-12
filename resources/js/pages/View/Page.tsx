import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import TextField from "../Form/TextField";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ExtendedPageProps = { }

interface Schema {
    title: string;
    path: string;
    content: Array<App.Data.Form.FieldData>;
}

export default function Page({ }: ExtendedPageProps) {

    const [schemas, setSchemas] = useState([] as Array<Schema>);

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


    return (
        <div className="w-full flex justify-center">
            <div className="flex w-full max-w-4xl flex-col gap-6">
            {schemas.length > 0 &&
                <Tabs defaultValue={schemas[0].title} className="w-full pt-16">
                    <TabsList>
                        {schemas.map((schema, index) => (
                            <TabsTrigger value={schema.title} key={index}>{schema.title}</TabsTrigger>
                        ))}
                    </TabsList>
                    {schemas.map((schema, index) => (
                        <TabsContent value={schema.title} key={index}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{schema.title}</CardTitle>
                                    <CardDescription>This is a description of the module</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <Form key={index} schema={schema.content} />
                                </CardContent>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            }
            </div>
        </div>
    )
}
