// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJj8dz72E-xTz8nLWiw3TB2yhRAbN-xFg",
  authDomain: "atlantic-united-sc.firebaseapp.com",
  projectId: "atlantic-united-sc",
  storageBucket: "atlantic-united-sc.firebasestorage.app",
  messagingSenderId: "761712905136",
  appId: "1:761712905136:web:bbba0cd483f9ec6371e475",
  measurementId: "G-R4HQBNK8P7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);