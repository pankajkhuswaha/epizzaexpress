"use client";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useQuery } from "@tanstack/react-query";
import fetchApi from "@/utils/axios";
import { UserProp } from "@/types";
import { useDeleteUser, useUpdateUser } from "@/hooks/useAuth";
import { Trash2Icon } from "lucide-react";

const UserList = () => {
  const { data } = useQuery({
    queryKey: ["fetch-all-users"],
    queryFn: () => fetchApi<{users:UserProp[]}>("GET", "/api/auth/users"),
  });
  const { mutate: updateUser } = useUpdateUser();
  const { mutate: deleteUser } = useDeleteUser();
  const columns: ColDef[] = [
    {
      headerName: "Sr. No",
      field: "index",
      cellRenderer: (data: any) => {
        return data.rowIndex + 1;
      },
    },
    {
      headerName: "Full Name",
      field: "name",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Mobile",
      field: "mobile",
      editable: true,
      onCellValueChanged: ({ data, newValue }) => {
        updateUser({ id: data._id, data: { mobile: newValue } });
      },
    },
    {
      headerName: "Role",
      field: "role",
    },
    {
      headerName: "Offer Applied",
      field: "offerApplied",
      editable: true,
      onCellValueChanged: ({ data, newValue }) => {
        updateUser({ id: data._id, data: { offerApplied: newValue } });
      },
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: ({ data }: { data: any }) => {
        return (
          <div className="flex gap-4 items-center py-2">
            <Trash2Icon
              onClick={() => deleteUser(data._id)}
              className="text-red-600 text-4xl cursor-pointer"
            />
          </div>
        );
      },
    },
  ];
  return (
    <div
      className="ag-theme-quartz-auto-dark" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={data?.users} columnDefs={columns} />
    </div>
  );
};

export default UserList;
