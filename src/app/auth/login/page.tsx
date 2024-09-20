"use client";

import PizzaLoder from "@/components/loader";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

const LoginPage = () => {
  const { mutate: loginUser ,isPending} = useAuth().login;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formdata = new FormData(event.target as HTMLFormElement);
    loginUser({
      email: formdata.get("email") as string,
      password: formdata.get("password") as string,
    });
  };
  return (
    <div className="mx-auto my-10 w-full max-w-lg rounded-2xl bg-gray-900 p-4 shadow-md md:p-8">
      {isPending && <PizzaLoder text="Loging in ..." />}
      <h2 className="mb-6 text-center text-2xl font-bold text-primary">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            required
          />
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-blue-500 hover:text-blue-700"
          >
            Forgot your password?
          </Link>
        </div>
        <button
          type="submit"
          className="hover:bg-primary-dark flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Sign in
        </button>
        <Link
          href="/auth/signup"
          className="my-4 block cursor-pointer text-sm font-medium"
        >
          Not Registered with us ?{" "}
          <span className="text-blue-500">Signup Now</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
