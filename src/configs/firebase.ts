// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXP7nzM5t9XgJuS3UOCWJxP37lyLRvnU",
  authDomain: "epizza-express.firebaseapp.com",
  projectId: "epizza-express",
  storageBucket: "epizza-express.appspot.com",
  messagingSenderId: "455130932034",
  appId: "1:455130932034:web:2171a7caf8e99164e15edb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
