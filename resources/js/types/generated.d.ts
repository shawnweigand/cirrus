declare namespace App.Data {
export type OrganizationData = {
slug: string;
name: string;
templates: Array<App.Data.TemplateData> | null;
created_at: string;
updated_at: string;
};
export type TemplateData = {
slug: string;
name: string;
category: string;
kind: string;
source: string;
version: string;
created_at: string;
updated_at: string;
description: string | null;
form: Array<App.Data.Form.FieldData> | null;
is_active: boolean;
organization: App.Data.OrganizationData | null;
};
}
declare namespace App.Data.Form {
export type FieldData = {
id: string;
type: string;
label: string;
description: string;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
export type TextFieldData = {
default: string | null;
id: string;
type: string;
label: string;
description: string;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
}
