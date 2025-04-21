// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoCixdBgqrsFcw9vTaCkfO_XIEIbBQsNw",
  authDomain: "authorization-first-3e808.firebaseapp.com",
  projectId: "authorization-first-3e808",
  storageBucket: "authorization-first-3e808.firebasestorage.app",
  messagingSenderId: "144207546097",
  appId: "1:144207546097:web:17bb236e1c1b89a824cb50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);