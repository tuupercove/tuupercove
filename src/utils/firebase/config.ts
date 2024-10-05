// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL2zNGTaS5jUXOvQ7rvGl9eExPdL1MEXc",
  authDomain: "tuuperlab.firebaseapp.com",
  projectId: "tuuperlab",
  storageBucket: "tuuperlab.appspot.com",
  messagingSenderId: "594021044463",
  appId: "1:594021044463:web:5428f022ddd0e70efc4b1a",
  measurementId: "G-78M0XNWCSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);