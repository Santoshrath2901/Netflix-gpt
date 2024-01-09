// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPDPXARC0SoBhcOTnOQrQJ4aw68lsScYU",
  authDomain: "netflix-gpt-93806.firebaseapp.com",
  projectId: "netflix-gpt-93806",
  storageBucket: "netflix-gpt-93806.appspot.com",
  messagingSenderId: "416563905998",
  appId: "1:416563905998:web:7258fad209a274b595979f",
  measurementId: "G-XHE8K76B71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()