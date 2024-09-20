"use client";
import fetchApi from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import swal from "sweetalert";
import Link from "next/link";
import PizzaLoder from "@/components/loader";
import GoogleLogin from "../GoogleLogin";

interface SignupDetail {
  name: string;
  mobile: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name) {
      newErrors.name = "Full name is required";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate: signupUser, isPending } = useMutation({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      signupUser(formData);
    }
  };

  return (
    <>
      {isPending && <PizzaLoder text="Signing in ..." />}

      <div className="my-10 flex items-center justify-center">
        <div className="mx-2 w-full max-w-lg rounded-2xl bg-gray-900 p-4 shadow-md md:p-8">
          <center className="">
            <h2 className="text-2xl font-bold text-primary">Register on</h2>
            <Image
              src="/img/logo/logo.png"
              alt="logo"
              width={200}
              height={90}
            />
            {/* <p className="text-lg mb-4">to grab latest offer</p> */}
          </center>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-400"
              >
                Mobile Number
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                placeholder="999XXXXXX75"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && (
                <p className="mt-2 text-sm text-red-600">{errors.mobile}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {errors.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <button type="submit" className="btn w-full">
                Sign Up
              </button>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-0 w-full overflow-hidden border-b">d</div>
              Or
              <div className="h-0 w-full overflow-hidden border-b">d</div>
            </div>
          </form>
          <GoogleLogin />
          <Link href={"/auth/login"}>
            Already registered ?{" "}
            <span className="text-blue-600">Login Now</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
