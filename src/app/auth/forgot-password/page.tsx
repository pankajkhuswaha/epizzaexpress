"use client";
import fetchApi from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { FormEvent, useState } from "react";
import PasswordResetSuccessPage from "./Sucess";
import PizzaLoder from "@/components/loader";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const { mutate, error, status, isPending } = useMutation({
    mutationKey: ["forgot-password-generate"],
    mutationFn: () => fetchApi("POST", "/api/auth/forgot-password", { email }),
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  if (status == "success") {
    return <PasswordResetSuccessPage />;
  }

  return (
    <div className="flex flex-col justify-center p-4 py-20">
      {isPending && <PizzaLoder text="Sending email to reset password" />}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto h-12 w-auto"
          src="/img/logo/logo.png"
          height={200}
          width={400}
          alt="Pizza Restaurant Logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-200">
          {`Don't`} worry, {`we'll`} send you reset instructions.
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none sm:text-sm"
              />
            </div>
          </div>
          {error && (
            <p className="mt-1 text-sm text-red-500">{error?.message}</p>
          )}

          <div>
            <button
              type="submit"
              className="mb-4 w-full rounded bg-primary py-2 font-semibold text-black"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
