import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Braces, ClipboardList } from 'lucide-react';

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


        </AppLayout>
    );
}
