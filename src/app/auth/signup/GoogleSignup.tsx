"use client";
import { auth, googleProvider } from "@/configs/firebase";
import useAuth from "@/hooks/useAuth";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleSignup = () => {
  const { mutateAsync: signupUser } = useAuth().sigup;
  const handleGoogleSignup = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(async (result) => {
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
      })
      .catch((err) => {
        alert(err);
      });

    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    // The signed-in user info.
  };
  return (
    <>
      <button
        onClick={handleGoogleSignup}
        className="my-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border py-2 hover:bg-slate-700"
      >
        <FcGoogle size={30} /> Register with google
      </button>
    </>
  );
};

export default GoogleSignup;
