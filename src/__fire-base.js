// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBup-FGL2g2IFgw_MG4d34ZJ-XpO1RCLM",
  authDomain: "my-first-firebase-8800f.firebaseapp.com",
  projectId: "my-first-firebase-8800f",
  storageBucket: "my-first-firebase-8800f.firebasestorage.app",
  messagingSenderId: "871695039884",
  appId: "1:871695039884:web:56d34eae28b4a4ce93aaa9",
  measurementId: "G-W2W9B017BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);