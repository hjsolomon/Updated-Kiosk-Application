"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header.tsx";
import { SecurityForm } from "@/interfaces/securityReq.ts";
import { DataTableColumnHeaderEmployee } from "@/components/table/data-table-employee-header.tsx";

//import {SecurityFormLogTable} from "@/routes/request-log/securityLogPage.tsx";
export const columnsSecurityFormLog: ColumnDef<SecurityForm>[] = [
  {
    accessorKey: "reqID",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] font-normal">
        #{"SE" + row.getValue("reqID")}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ename",
    header: ({ column }) => (
      <DataTableColumnHeaderEmployee column={column} title="Employee Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {/*{label && <Badge variant="outline">{label.label}</Badge>}*/}
          <span className="max-w-[300px] truncate font-medium">
            {row.getValue("ename")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("location")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "call",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Call" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          {/*{label && <Badge variant="outline">{label.label}</Badge>}*/}
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("call")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("priority")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("status")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "situation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[100px] items-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("situation")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
