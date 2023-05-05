// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjNnH59_WYRYDBXpBculLv7ymeOoF8VnE",
  authDomain: "hotelmanagement-b1b62.firebaseapp.com",
  projectId: "hotelmanagement-b1b62",
  storageBucket: "hotelmanagement-b1b62.appspot.com",
  messagingSenderId: "870093433292",
  appId: "1:870093433292:web:e53800710f142a3f2fd569",
  measurementId: "G-NJSMSW2LTW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)