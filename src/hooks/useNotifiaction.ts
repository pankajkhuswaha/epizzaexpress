"use client";
import { NotificationProp } from "@/types";
import fetchApi from "@/utils/axios";
import { failedAlert, successAlert } from "@/utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import swal from "sweetalert";



export const useFecthNotifications = () => {
  return useQuery({
    queryKey: ["fetch-all-notifications"],
    queryFn: () => fetchApi<NotificationProp[]>("GET", "/api/notifications"),
  });
};

export const useFecthSingleNotification = (id?: string) => {
  return useQuery({
    queryKey: ["fetch-singleNotification", id],
    queryFn: () =>
      fetchApi<NotificationProp>("GET", `/api/notifications/${id}`),
  });
};

export const useAddNotification = () => {
  const queryclient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["add-new-notification"],
    mutationFn: (data: any) => fetchApi("POST", "/api/notifications", data),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-notifications"] });
      successAlert("", "Notification is added Sucessfully");
      router.push("/admin/notifications");
    },
  });
};

export const useUpdateNotification = () => {
  const queryclient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["update-notification"],
    mutationFn: ({ id, data }: { id: string; data: Record<string, string> }) =>
      fetchApi("PUT", `/api/notifications/${id}`, data),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-notifications"] });
      successAlert("", "Notification is updated Sucessfully");
      router.push("/admin/notifications");
    },
  });
};

export const useDeleteNotification = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["update-notification"],
    mutationFn: async (id: string) => {
      const result = await swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
      });
      if (result.isConfirmed) {
        return await fetchApi("DELETE", `/api/notifications/${id}`);
      }
    },
    onError: (err) => failedAlert("Delete notification failed", err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-notifications"] });
      successAlert("", "Notification is deleted Sucessfully");
    },
  });
};
