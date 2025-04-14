import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { Link } from '@inertiajs/react';
interface OrgMenuContentProps {
    orgs: App.Data.OrganizationData[];
}

export function OrgMenuContent({ orgs }: OrgMenuContentProps) {
    const cleanup = useMobileNavigation();

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm font-bold">
                    Organizations
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                {(orgs || []).map((org) =>
                <DropdownMenuItem asChild key={org.slug}>
                    <Link className="block w-full" href={route('org.dashboard', org.slug)} as="button" onClick={cleanup}>
                        {org.name}
                    </Link>
                </DropdownMenuItem>
                )}
            </DropdownMenuGroup>

        </>
    );
}
