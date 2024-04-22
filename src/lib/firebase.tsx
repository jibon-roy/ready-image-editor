// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAvRZSDa2mIFVfW77GPjjD0t1LeB-phgQ",
    authDomain: "ready-image.firebaseapp.com",
    projectId: "ready-image",
    storageBucket: "ready-image.appspot.com",
    messagingSenderId: "1053260256682",
    appId: "1:1053260256682:web:ef821e936d99483a5b87d3",
    measurementId: "G-T41PP7RBYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);