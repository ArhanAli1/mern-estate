// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ff1e4.firebaseapp.com",
  projectId: "mern-estate-ff1e4",
  storageBucket: "mern-estate-ff1e4.appspot.com",
  messagingSenderId: "600631345595",
  appId: "1:600631345595:web:0363c3fda58ffd7d41849e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);