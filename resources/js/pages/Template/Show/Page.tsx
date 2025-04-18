import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Page() {
    const { org } = usePage<SharedData>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        // {
        //     title: 'Templates',
        //     href: route('org.templates', org.current.slug),
        // },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Templates" />

        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    Account
                </TabsContent>
                <TabsContent value="password">
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
