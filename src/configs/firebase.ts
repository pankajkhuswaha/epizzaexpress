"use client";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getMessaging, isSupported } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt9waSp8PtKsBznhkMj4UhOKrQTP7nO-s",
  authDomain: "e-pizza-express.firebaseapp.com",
  projectId: "e-pizza-express",
  storageBucket: "e-pizza-express.appspot.com",
  messagingSenderId: "672137301661",
  appId: "1:672137301661:web:d8e08956f3f8a43e7b0e74",
  measurementId: "G-CZDSXWVH85",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const messaging = async () => {
//   const supported = await isSupported();
//   if (supported) {
//     return getMessaging(app);
//   } else {
//     console.log("This browser is not supported");
//     return null;
//   }
// };

export const googleProvider = new GoogleAuthProvider();
