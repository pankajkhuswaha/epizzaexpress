"use client";

import { UserProp } from "@/types";
import fetchApi from "@/utils/axios";
import { failedAlert, successAlert } from "@/utils/helpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import swal from "sweetalert";

interface LoginDetails {
  email: string;
  password: string;
}

interface SignupDetail extends LoginDetails {
  name: string;
  mobile: string;
  emailverified?: boolean;
}

export interface UserDetails extends SignupDetail {
  _id: string;
  role: string;
}

export const useUser = () => {
  return useQuery({
    queryKey: ["fetch-current-user"],
    queryFn: () => fetchApi<UserDetails>("GET", "/api/auth/me"),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: ["logout-user"],
    mutationFn: () => fetchApi("POST", "/api/auth/logout"),
    onSuccess: (res) => {
      swal({
        icon: "info",
        title: "Logout successfully",
      });
      window.location.href = "/";
    },
  });
};

export const useUpdateUser = () => {
  const queryclient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: ({ id, data }: { id: string; data: Record<string, string> }) =>
      fetchApi("PUT", `/api/auth/${id}`, data),
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-users"] });
      successAlert("", "User is updated Sucessfully");
      router.push("/admin/users");
    },
  });
};

export const useDeleteUser = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: async (id: string) => {
      const result = await swal({
        title: "Are you sure delete this user?",
        text: "You won't be able to revert this!",
        icon: "warning",
        dangerMode: true,
        buttons: ["Cancel", true],
      });
      if (result) {
        return await fetchApi("DELETE", `/api/auth/${id}`);
      }
      throw { message: "User canceled the operation" };
    },
    onError: (err) => failedAlert("Delete user failed", err.message),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ["fetch-all-users"] });
      successAlert("", "User is deleted Sucessfully");
    },
  });
};

const useAuth = () => {
  const router = useRouter();

  const login = useMutation({
    mutationKey: ["Login-user"],
    mutationFn: (data: LoginDetails) =>
      fetchApi<{ message: string; user: UserProp }>(
        "POST",
        "/api/auth/login",
        data
      ),
    onSuccess: (res) => {
      swal({
        icon: "success",
        title: "Login Successfull",
      });
      if(res.user.role=="admin"){
        router.push("/admin");
        return
      }
      router.push("/");
    },
    onError: (err) => {
      swal({
        icon: "error",
        title: "Login failed",
        text: err.message,
      });
    },
  });

  const sigup = useMutation({
    mutationKey: ["signup-user"],
    mutationFn: (data: SignupDetail) =>
      fetchApi("POST", "/api/auth/signup", data),
    onSuccess: () => {
      swal({
        icon: "success",
        title: "Signup Successfull",
        text: "Now you can login to proceed further",
      });
      router.push("/auth/login");
    },
    onError: (err) => {
      swal({
        icon: "error",
        title: "Signup failed",
        text: err.message,
      });
    },
  });

  return { sigup, login };
};

export default useAuth;
