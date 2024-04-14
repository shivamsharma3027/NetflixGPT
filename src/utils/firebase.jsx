// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0V9g4mzJzPn3J8ILHiWn4384gvT3NEQ",
  authDomain: "netflixgpt-f00c6.firebaseapp.com",
  projectId: "netflixgpt-f00c6",
  storageBucket: "netflixgpt-f00c6.appspot.com",
  messagingSenderId: "531506763524",
  appId: "1:531506763524:web:0ac169b570eb44dcede251",
  measurementId: "G-Z05PPQCHBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();