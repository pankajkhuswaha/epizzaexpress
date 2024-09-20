"use client";
import fetchApi from "@/utils/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PasswordResetSuccessPage from "./Sucess";

interface IResetPassword {
  email: string;
  password: string;
  confirmPassword: string;
}

const PasswordResetForm = () => {
  const { token } = useParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<IResetPassword>();

  const { mutate, status: changeStatus } = useMutation({
    mutationKey: ["change-password"],
    mutationFn: () =>
      fetchApi("POST", `/api/auth/forgot-password/${token}`, {
        password: watch("password"),
      }),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const {
    data: email,
    error,
    status,
  } = useQuery({
    queryKey: ["validate-reseet-token"],
    queryFn: () =>
      fetchApi<string>("GET", `/api/auth/forgot-password/${token}`),
    retry: false,
  });

  if (error) {
    toast.error(error.message);
    router.push("/auth/forgot-password");
  }

  if (status == "success" && email) {
    setValue("email", email);
  }

  if (changeStatus == "success") {
    return <PasswordResetSuccessPage />;
  }

  return (
    <div className="my-10 flex items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-xl shadow-lg">
        <div className="text-center">
          <Image
            className="mx-auto h-12 w-auto"
            src="/img/logo/logo.png"
            height={200}
            width={400}
            alt="Pizza Restaurant Logo"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-primary">
            Reset Your Password
          </h2>
          <p className="mt-2 text-sm text-gray-200">
            Enter your new password below
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(() => mutate())}
        >
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="text-gray-200">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="mb-2 block w-full rounded border-2 border-gray-500 bg-gray-950 px-4 py-2 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-200">
                New Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                className="mb-2 block w-full rounded border-2 border-gray-500 bg-gray-950 px-4 py-2 focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="text-gray-200">
                Confirm New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
                className="mb-2 block w-full rounded border-2 border-gray-500 bg-gray-950 px-4 py-2 focus:border-primary"
              />
            </div>
          </div>

          {(errors.email || errors.password || errors.confirmPassword) && (
            <div className="mt-2 text-sm text-red-500">
              {errors.email?.message ||
                errors.password?.message ||
                errors.confirmPassword?.message}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full rounded bg-primary px-4 py-2 text-black"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetForm;
