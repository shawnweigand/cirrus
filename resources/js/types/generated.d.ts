declare namespace App.Data {
export type OrganizationData = {
slug: string;
name: string;
templates: Array<App.Data.TemplateData> | null;
created_at: string;
updated_at: string;
};
export type SubmissionData = {
user_id: number;
template_id: number;
values: Array<any>;
status: string;
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
default: any;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
export type MultiFieldData = {
options: Array<any> | null;
id: string;
type: string;
label: string;
description: string;
default: any;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
export type OptionFieldData = {
options: Array<any> | null;
id: string;
type: string;
label: string;
description: string;
default: any;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
export type OptionFieldOptionsData = {
label: string;
value: string;
};
export type TextFieldData = {
id: string;
type: string;
label: string;
description: string;
default: any;
validation: Array<any> | null;
condition: string | null;
inCode: boolean | null;
};
}
