import {
    Form as ReactForm,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import TextField from "../Form/TextField";
import { useState } from "react";
import { z } from "zod";
import { useForm as useReactForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "./Form";

type ExtendedPageProps = { }

export default function Page({ }: ExtendedPageProps) {

    let json = [
        [{"id":"name","type":"text","label":"Name","description":"The name of your VM","default":"test","validation":["required","max:5"]}],
        [{"id":"name","type":"text","label":"Name","description":"The name of your VM","default":"test","validation":["required","max:5"]}]
    ];

    const [schemas, setSchemas] = useState(json as Array<Array<App.Data.Form.FieldData>>);

    return (
        <>
            {schemas.map((schema, index) => (
                <Form key={index} schema={schema} />
            ))}
        </>
      )
}
