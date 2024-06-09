"use client";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getMessaging, isSupported } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKXP7nzM5t9XgJuS3UOCWJxP37lyLRvnU",
//   authDomain: "epizza-express.firebaseapp.com",
//   projectId: "epizza-express",
//   storageBucket: "epizza-express.appspot.com",
//   messagingSenderId: "455130932034",
//   appId: "1:455130932034:web:2171a7caf8e99164e15edb",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDa9_puJDjkxxBlJe_7jOHMEJiOmoWsbXE",
  authDomain: "fire-35992.firebaseapp.com",
  projectId: "fire-35992",
  storageBucket: "fire-35992.appspot.com",
  messagingSenderId: "959544074572",
  appId: "1:959544074572:web:f69d9d0bc5f5cd49d4efe9",
  measurementId: "G-284PTHJSG8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const messaging = async () => {
  const supported = await isSupported();
  if (supported) {
    return getMessaging(app);
  } else {
    console.log("This browser is not supported");
    return null;
  }
};

// export const messaging = getMessaging(app)
export const googleProvider = new GoogleAuthProvider();
