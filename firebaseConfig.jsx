// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA481CJ37FpduCGUWm35EhXwdx_SzNOtAs",
  authDomain: "pucomfort-4fb23.firebaseapp.com",
  projectId: "pucomfort-4fb23",
  storageBucket: "pucomfort-4fb23.appspot.com",
  messagingSenderId: "662946400447",
  appId: "1:662946400447:web:f70749995af86e57b89e0a",
  measurementId: "G-PHGKRMQGEB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
