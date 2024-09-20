"use client";
import { sendNotifications } from "@/actions/notification";
import PizzaLoder from "@/components/loader";
import {
  useDeleteNotification,
  useFecthNotifications,
} from "@/hooks/useNotifiaction";
import { NotificationProp } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

const NotificationList = () => {
  const { data: notifications } = useFecthNotifications();
  const router = useRouter();
  const { mutate: deleteNotification } = useDeleteNotification();
  const { mutate: sendNotification, isPending } = useMutation({
    mutationKey: ["send-notification"],
    mutationFn: (data: NotificationProp) => sendNotifications(data),
    onSuccess: (data) => {
      swal({
        icon: "success",
        title: "Notification sent Successfully",
      });
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
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return (
          <button
            onClick={() => sendNotification(data)}
            className="h-10 rounded-md bg-primary px-4 font-semibold text-black"
          >
            Send Notification
          </button>
        );
      },
    },
    {
      headerName: "Image",
      field: "image",
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return (
          <img
            src={data.image}
            alt="image"
            className="size-20 rounded border"
          />
        );
      },
    },
    {
      headerName: "Action",
      field: "_id",
      cellRenderer: ({ data }: { data: NotificationProp }) => {
        return (
          <div className="flex items-center gap-4 py-2">
            <Edit2Icon
              onClick={() =>
                router.push(`/admin/notifications/add?update=${data._id}`)
              }
              className="cursor-pointer text-4xl text-blue-600"
            />
            <Trash2Icon
              onClick={() => deleteNotification(data._id)}
              className="cursor-pointer text-4xl text-red-600"
            />
          </div>
        );
      },
    },
  ];
  return (
    <>
      {isPending && <PizzaLoder text="Sending notifications to user ..." />}
      <div className="my-2 mb-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl text-primary md:text-4xl">
          List of All Notifications
        </h1>
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
