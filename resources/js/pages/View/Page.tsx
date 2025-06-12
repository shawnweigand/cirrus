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
        <>
            {schemas.map((schema, index) => (
                <Form key={index} schema={schema.content} />
            ))}
        </>
      )
}
