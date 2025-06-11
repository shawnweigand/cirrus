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

        // <ReactForm {...form}>

        // <div className="w-full max-w-3xl mx-auto">
        //     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        //         {evlauatedFormFields?.map(field => {
        //             return selectField(field)
        //         })}
        //         <Button type="submit">Submit</Button>
        //     </form>
        // </div>

        // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //     <code className="text-white">{JSON.stringify(rawTemplate, null, 2)}</code>
        // </pre>

        // </ReactForm>
      )
}
