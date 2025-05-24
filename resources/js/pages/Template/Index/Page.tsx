import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react";
import { DataTable } from './Partials/DataTable';
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DataTableColumnHeader } from '@/components/ui/data-table';
import { access } from 'fs';

type ExtendedPageProps = {
    templates: App.Data.TemplateData[]
}

// type Payment = {
//     id: string
//     amount: number
//     status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

// export const payments: Payment[] = [
//     {
//         id: "728ed52f",
//         amount: 100,
//         status: "pending",
//         email: "m@example.com",
//     },
//     {
//         id: "489e1d42",
//         amount: 125,
//         status: "processing",
//         email: "example@gmail.com",
//     },
//     // ...
// ]

// export const columns: ColumnDef<Payment>[] = [
//     {
//         id: "select",
//         header: ({ table }) => (
//           <Checkbox
//             checked={
//               table.getIsAllPageRowsSelected() ||
//               (table.getIsSomePageRowsSelected() && "indeterminate")
//             }
//             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//             aria-label="Select all"
//           />
//         ),
//         cell: ({ row }) => (
//           <Checkbox
//             checked={row.getIsSelected()}
//             onCheckedChange={(value) => row.toggleSelected(!!value)}
//             aria-label="Select row"
//           />
//         ),
//         enableSorting: false,
//         enableHiding: false,
//     },
//     {
//         accessorKey: "status",
//         header: "Status",
//     },
//     {
//         accessorKey: "email",
//         header: ({ column }) => (
//             <DataTableColumnHeader column={column} title="Email" />
//         )
//     },
//     {
//         accessorKey: "amount",
//         header: () => <div className="text-right">Amount</div>,
//         cell: ({ row }) => {
//           const amount = parseFloat(row.getValue("amount"))
//           const formatted = new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency: "USD",
//           }).format(amount)

//           return <div className="text-right font-medium">{formatted}</div>
//         },
//     },
//     {
//         id: "actions",
//         cell: ({ row }) => {
//             const payment = row.original

//             return (
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" className="h-8 w-8 p-0">
//                             <span className="sr-only">Open menu</span>
//                             <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                         <DropdownMenuItem
//                             onClick={() => navigator.clipboard.writeText(payment.id)}
//                             >
//                             Copy payment ID
//                         </DropdownMenuItem>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem>View customer</DropdownMenuItem>
//                         <DropdownMenuItem>View payment details</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             )
//         },
//     },
// ]


export default function Page({ templates }: ExtendedPageProps) {

    const cols = [
        {
            accessorKey: "name",
            header: "Name",
            enableHiding: false,
        },
        {
            accessorKey: "category",
            header: ({ column }: { column: any }) => (
                <DataTableColumnHeader column={column} title="Category" />
            ),
        },
        {
            accessorKey: "version",
            header: ({ column }: { column: any }) => (
                <DataTableColumnHeader column={column} title="Version" />
            ),
            enableSearching: false,
        },
        // {
        //     accessorKey: "kind",
        //     header: ({ column }) => (
        //         <DataTableColumnHeader column={column} title="Kind" />
        //     ),
        // },
        {
            id: "actions",
            cell: ({ row }: { row: any }) => {
                const template = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(template.name)}
                                >
                                Copy template name
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href={route('org.templates.edit', {
                                    slug: org.current.slug,
                                    template_slug: 'vm'
                                })}>
                                    Edit Template
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    const { org } = usePage<SharedData>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Templates',
            href: route('org.templates.index', org.current.slug),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            {/* <DataTable columns={columns} data={payments} /> */}
            <DataTable columns={cols} data={templates} />
        </AppLayout>
    );
}
