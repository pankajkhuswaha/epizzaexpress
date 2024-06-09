"use client";
import fetchApi from "@/utils/axios";
import { failedAlert, successAlert } from "@/utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Trash2Icon } from "lucide-react";
import swal from "sweetalert";

const ConatctRequest = () => {
  const { data: users } = useQuery({
    queryKey: ["fetch-all-contactRequests"],
    queryFn: () => fetchApi<Record<string, string>[]>("GET", "/api/contact"),
  });
  const queryclient = useQueryClient();
  const { mutate: deleteContact } = useMutation({
    mutationKey: ["delete-contact"],
    mutationFn: async (id: string) => {
      const result = await swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
      });
      if (result.isConfirmed) {
        return await fetchApi("DELETE", `/api/contact/${id}`);
      }
    },
    onError: (err) => failedAlert("Delete contact failed", err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-contacts"] });
      successAlert("", "Contact is deleted Sucessfully");
    },
  });

  const columns: ColDef[] = [
    {
      headerName: "Sr. No",
      field: "index",
      cellRenderer: (data: any) => {
        return data.rowIndex + 1;
      },
    },
    {
      headerName: "Date",
      field: "createdAt",
      cellRenderer: ({ data }: { data: Record<string, string> }) => {
        return new Date(data.createdAt).toLocaleString("en-us");
      },
    },
    {
      headerName: "Full name",
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
      headerName: "Topic",
      field: "topic",
    },
    {
      headerName: "Message",
      field: "message",
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: ({ data }: { data: Record<string, string> }) => {
        return (
          <div className="flex gap-4 items-center py-2">
            <Trash2Icon
              onClick={() => deleteContact(data._id)}
              className="text-red-600 text-4xl cursor-pointer"
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex my-2 mb-4 justify-between gap-4 items-center">
        <h1 className="text-primary text-2xl md:text-4xl">
          List of All Conatct-reqs
        </h1>
      </div>
      <div className="ag-theme-quartz-auto-dark" style={{ height: 500 }}>
        <AgGridReact rowData={users} columnDefs={columns} />
      </div>
    </>
  );
};

export default ConatctRequest;
