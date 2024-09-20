"use client";
import PizzaLoder from "@/components/loader";
import { auth, googleProvider } from "@/configs/firebase";
import { ApiResponse, IUser } from "@/types";
import fetchApi from "@/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const GoogleLogin = ({ text }: { text?: string }) => {
  const { mutateAsync: signupUser,isPending } = useMutation({
    mutationKey: ["google-signup"],
    mutationFn: (user: IUser) =>
      fetchApi<ApiResponse>("POST", "/api/auth/google-login", user),
    onSuccess: (res) => {
      toast.success(res.message);
      if (res?.user?.role == "admin") {
        window.location.href = "/admin";
        return;
      }
      window.location.href = "/";
    },
    onError: (err) => toast.error(err.message),
  });
  const handleGoogleSignup = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const token = await user.getIdToken();
    const userInfo = { ...user, token } as unknown as IUser;
    signupUser(userInfo);
  };
  return (
    <>
    {isPending && <PizzaLoder text="Login in..."/>}
      <button
        onClick={handleGoogleSignup}
        className="my-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border py-2 hover:bg-slate-700"
      >
        <FcGoogle size={30} /> {text || "Register"} with google
      </button>
    </>
  );
};

export default GoogleLogin;
