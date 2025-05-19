import TextField from "./TextField";

type ExtendedPageProps = {
    template: App.Data.TemplateData
}

export default function FieldSelector({ template }: ExtendedPageProps) {

    const selectField = (field: App.Data.Form.FieldData) => {
        switch (field.type) {
            case 'text':
                return <TextField field={field} />
            default:
                return null;
        }
    }

    return (
        template.form?.forEach(field => {
            selectField(field)
        })
    );
}
