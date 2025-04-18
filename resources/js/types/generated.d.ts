declare namespace App.Data {
export type OrganizationData = {
slug: string;
name: string;
templates: Array<App.Data.TemplateData> | null;
created_at: string;
updated_at: string;
};
export type TemplateData = {
name: string;
description: string | null;
category: string;
kind: string;
source: string;
version: string;
form: Array<any> | null;
is_active: boolean;
organization: App.Data.OrganizationData | null;
created_at: string;
updated_at: string;
};
}
