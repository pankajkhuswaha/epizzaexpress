import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PasswordResetSuccessPage = () => {
  return (
    <div className="flex flex-col justify-center p-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto h-12 w-auto"
          src="/img/logo/logo.png"
          height={200}
          width={400}
          alt="Pizza Restaurant Logo"
        />
        <div className="mt-6 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
          <h2 className="mt-4 text-3xl font-extrabold text-primary">
            Check your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-200">
            {`We've`} sent a password reset link to your registered email
            address.
          </p>
        </div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <p className="text-center text-sm text-gray-200">
              Please check your email and click on the link to reset your
              password. If you {`don't`} see the email, please check your spam
              folder.
            </p>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="rounded bg-primary px-4 py-2 text-black"
                onClick={() => (window.location.href = "/")}
              >
                Return to Home
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center gap-4 text-center text-xs text-gray-300">
              {`Didn't`} receive the email?
              <p
                onClick={() => (window.location.href = "/auth/forgot-password")}
                className="hover:text-primary-500 ml-1 cursor-pointer font-medium text-primary"
              >
                Try again
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;
