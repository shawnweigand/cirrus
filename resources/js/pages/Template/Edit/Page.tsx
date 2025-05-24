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

const fields = [
    {
        key: 'purpose',
        label: 'Purpose',
        description: 'The purpose of the template',
        type: 'text',
        default: '',
        code: true,
        condition: 'true',
        validation: [
            'required',
            'string',
            'max:3',
        ]
    }
]

export default function Page({ templates }: ExtendedPageProps) {
    const { org } = usePage<SharedData>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Templates',
            href: route('org.templates.index', org.current.slug),
        },
        {
            title: templates[0].name,
            href: route('org.templates.edit', [org.current.slug, templates[0].slug]),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Templates" />

        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
            <Tabs defaultValue="list" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="list">
                        <ClipboardList className='w-4 h-4' />
                    </TabsTrigger>
                    <TabsTrigger value="code">
                        <Braces className='w-4 h-4' />
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="list">
                    Account
                </TabsContent>
                <TabsContent value="code">
                    Password
                </TabsContent>
            </Tabs>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel>
                Two
            </ResizablePanel>
        </ResizablePanelGroup>

        </AppLayout>
    );
}
