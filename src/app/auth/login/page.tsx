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
    <div className="bg-gray-900 my-10 p-4 md:p-8 rounded-2xl shadow-md w-full max-w-lg mx-auto">
      {isPending && <PizzaLoder text="Loging in ..."/>}
      <h2 className="text-2xl font-bold mb-6 text-center text-primary">
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            required
          />
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <a href="#" className="font-medium text-blue-500 hover:text-blue-700">
            Forgot your password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-black flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Sign in
        </button>
        <Link href="/auth/signup" className="font-medium my-4 text-sm block cursor-pointer">
          Not Registered with us ? <span className="text-blue-500">Signup Now</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
