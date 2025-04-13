import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronsUpDown } from 'lucide-react';
import { OrgMenuContent } from './org-menu-content';

export default function UserOrg() {
    const { state } = useSidebar();
    const isMobile = useIsMobile();

    const orgs = [
        {
            id: 1,
            name: 'Organization 1',
            slug: 'org-1',
        },
        {
            id: 2,
            name: 'Organization 2',
            slug: 'org-2',
        },
        {
            id: 3,
            name: 'Organization 3',
            slug: 'org-3',
        },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">
                    Organization
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                align="end"
                side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
            >
                <OrgMenuContent orgs={orgs} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
