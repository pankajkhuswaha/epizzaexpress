"use client";
import { sendNotifications } from "@/actions/notification";
import { useDeleteNotification, useFecthNotifications } from "@/hooks/useNotifiaction";
import { NotificationProp } from "@/types";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
  Edit2Icon,
  Trash2Icon
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotificationList = () => {
  const { data: notifications } = useFecthNotifications();
  const router = useRouter();
  const { mutate: deleteNotification } = useDeleteNotification();
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
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return new Date(data.createdAt).toLocaleString("en-us");
      },
    },
    {
      headerName: "Title",
      field: "title",
    },
    {
      headerName: "Message",
      field: "body",
    },
    {
      headerName: "Message",
      field: "body",
      cellRenderer:({data}:{data:NotificationProp}) =>{
        return <button onClick={()=>sendNotifications(data)} className="border bg-primary text-gray-900 rounded-xl px-4">Send Notification</button>
      }
    },
    {
      headerName: "Image",
      field: "image",
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return (
          <img
            src={data.image}
            alt="image"
            className="border rounded size-20"
          />
        );
      },
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return (
          <div className="flex gap-4 items-center py-2">
            <Edit2Icon
              onClick={() =>
                router.push(`/admin/notifications/add?update=${data._id}`)
              }
              className="text-blue-600 text-4xl cursor-pointer"
            />
            <Trash2Icon
              onClick={() => deleteNotification(data._id)}
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
        <h1 className="text-primary text-2xl md:text-4xl">List of All Notifications</h1>
        {/* <Link href={"/admin/notifications/add"} className="btn">
          Add New Notification
        </Link> */}
      </div>
      <div className="ag-theme-quartz-auto-dark" style={{ height: 500 }}>
        <AgGridReact rowData={notifications} columnDefs={columns} />
      </div>
    </>
  );
};

export default NotificationList;
