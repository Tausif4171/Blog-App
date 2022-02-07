// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFJ26PWudezZ0wqINhcQi1q_42wlSfABs",
  authDomain: "first-blog-website-665ee.firebaseapp.com",
  projectId: "first-blog-website-665ee",
  storageBucket: "first-blog-website-665ee.appspot.com",
  messagingSenderId: "284041964733",
  appId: "1:284041964733:web:f4e9f39ce8491670721bd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();