"use client";

import fetchApi from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface LoginDetails {
  email: string;
  password: string;
}

interface SignupDetail extends LoginDetails {
  name: string;
  mobile: string;
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

const useAuth = () => {
  const router = useRouter();

  const login = useMutation({
    mutationKey: ["Login-user"],
    mutationFn: (data: LoginDetails) =>
      fetchApi("POST", "/api/auth/login", data),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Login Successfull",
      });
      router.push("/user")
    },
    onError: (err) => {
      Swal.fire({
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
      Swal.fire({
        icon: "success",
        title: "Signup Successfull",
        text: "Now you can login to proceed further",
      });
      router.push("/auth/login");
    },
    onError: (err) => {
      Swal.fire({
        icon: "error",
        title: "Signup failed",
        text: err.message,
      });
    },
  });

  return { sigup, login };
};

export default useAuth;
