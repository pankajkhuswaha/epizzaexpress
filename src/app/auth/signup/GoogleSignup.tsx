"use client";

import { auth, googleProvider } from "@/configs/firebase";
import useAuth from "@/hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleSignup = () => {
  const { mutateAsync: signupUser } = useAuth().sigup;
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      const signUpInfo = {
        name: user.displayName || "",
        email: user.email || "",
        mobile: user.phoneNumber || "",
        image: user.photoURL || "",
        emailVerified: user.emailVerified,
        password: "null",
      };
      await signupUser(signUpInfo);
    } catch (err) {}
  };
  return (
    <>
      <button
        onClick={handleGoogleSignup}
        className="border rounded-full my-4 hover:bg-slate-700 cursor-pointer w-full flex gap-4 items-center py-2 justify-center"
      >
        <FcGoogle size={30} /> Register with google
      </button>
    </>
  );
};

export default GoogleSignup;
