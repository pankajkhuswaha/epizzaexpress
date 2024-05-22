"use client";
import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useQuery } from "@tanstack/react-query";
import fetchApi from "@/utils/axios";
import { UserProp } from "@/types";

const UserList = () => {
  const { data: users } = useQuery({
    queryKey: ["fetch-all-users"],
    queryFn: () => fetchApi<UserProp[]>("GET", "/api/auth"),
  });
  const columns: ColDef[] = [
    {
      headerName:"Sr. No",
      field:"index",
      cellRenderer:(data:any)=>{
        return data.column.instanceId + 1;
      }
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
    },
    {
      headerName: "Role",
      field: "role",
    },
    {
      headerName:"Action",
      field:"_id"
    }
  ];
  return (
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact rowData={users} columnDefs={columns} />
    </div>
  );
};

export default UserList;
