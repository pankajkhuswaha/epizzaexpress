import React from "react";
import { CheckCircle, LogIn } from "lucide-react";
import Link from "next/link";

const PasswordResetSuccessPage = () => {
  return (
    <div className="my-10 flex items-center justify-center p-4 md:my-20">
      <div className="w-full max-w-md space-y-8 rounded-xl text-center shadow-lg">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-primary">
          Password Changed Successfully!
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Your password has been updated. You can now log in with your new
          credentials.
        </p>
        <div className="mt-8">
          <Link
            href={"/auth/login"}
            className="block w-full rounded bg-primary px-4 py-2 text-black"
          >
            Log In Now
          </Link>
        </div>
        <div className="mt-4">
          <Link
            href="/"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Return to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;
