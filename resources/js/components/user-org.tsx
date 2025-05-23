import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Briefcase, ChevronsUpDown } from 'lucide-react';
import { OrgMenuContent } from './org-menu-content';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

export default function UserOrg() {
    const { state } = useSidebar();
    const isMobile = useIsMobile();
    const { org } = usePage<SharedData>().props;

    return (
        org.current &&
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
                        <Briefcase className="size-5 fill-current text-white dark:text-black" />
                    </div>
                    { org.current && org.current.name }
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                align="end"
                side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
            >
                <OrgMenuContent orgs={org.all} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
