"use client";
import { BlogProp } from "@/types";
import fetchApi from "@/utils/axios";
import { failedAlert, successAlert } from "@/utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import swal from "sweetalert";

export const useFecthBlogs = () => {
  return useQuery({
    queryKey: ["fetch-all-blogs"],
    queryFn: () => fetchApi<BlogProp[]>("GET", "/api/blogs"),
  });
};

export const useFecthSingleBlog = (id?: string) => {
  return useQuery({
    queryKey: ["fetch-singleBlog", id],
    queryFn: () => fetchApi<BlogProp>("GET", `/api/blogs/${id}`),
  });
};

export const useAddBlog = () => {
  const queryclient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["add-new-blog"],
    mutationFn: (data: any) => fetchApi("POST", "/api/blogs", data),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-blogs"] });
      successAlert("", "Blog is added Sucessfully");
      router.push("/admin/blogs");
    },
  });
};

export const useUpdateBlog = () => {
  const queryclient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["update-blog"],
    mutationFn: ({ id, data }: { id: string; data: Record<string, string> }) =>
      fetchApi("PUT", `/api/blogs/${id}`, data),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-blogs"] });
      successAlert("", "Blog is updated Sucessfully");
      router.push("/admin/blogs");
    },
  });
};

export const useDeleteBlog = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["update-blog"],
    mutationFn: async (id: string) => {
      const result = await swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", true],
      });
      if (result) {
        return await fetchApi("DELETE", `/api/blogs/${id}`);
      }
      throw { message: "User canceled the operation" };

    },
    onError: (err) => failedAlert("Delete blog failed", err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-blogs"] });
      successAlert("", "Blog is deleted Sucessfully");
    },
  });
};
