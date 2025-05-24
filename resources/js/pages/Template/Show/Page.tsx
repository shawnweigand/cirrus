import AppLayout from '@/layouts/app-layout';
import Form from '@/pages/Form/Form';
import { FormContextProvider } from '@/pages/Form/FormContext';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type ExtendedPageProps = {
    templates: App.Data.TemplateData[]
}

export default function Page({ templates }: ExtendedPageProps) {
    const { org } = usePage<SharedData>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Templates',
            href: route('org.templates.index', org.current.slug),
        },
        {
            title: templates[0].name,
            href: route('org.templates.show', [org.current.slug, templates[0].slug]),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Templates" />

            {templates.map(template => (
                <FormContextProvider rawTemplate={template}>
                    <Form key={`${template.organization}-${template.slug}`} />
                </FormContextProvider>
            ))}

        </AppLayout>
    );
}
