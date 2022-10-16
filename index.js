// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn6k7dQFvenH_ImYu1mK8lxtQrp9zWsVw",
  authDomain: "selaka-nanayakkara-resume.firebaseapp.com",
  projectId: "selaka-nanayakkara-resume",
  storageBucket: "selaka-nanayakkara-resume.appspot.com",
  messagingSenderId: "1021344581432",
  appId: "1:1021344581432:web:db1e811c836c3cfc4223cd",
  measurementId: "G-1X4J390RZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);