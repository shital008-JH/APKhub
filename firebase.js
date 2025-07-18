// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi-YFShJ1U59tC_jtxgZEUK27t6no4ZSM",
  authDomain: "apkhub-ebdc4.firebaseapp.com",
  projectId: "apkhub-ebdc4",
  storageBucket: "apkhub-ebdc4.firebasestorage.app",
  messagingSenderId: "986290377317",
  appId: "1:986290377317:web:27a002778b2be2fb596c8c",
  measurementId: "G-X8KE10YTMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);