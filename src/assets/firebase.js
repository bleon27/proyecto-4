// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc5N1yOPkgqgzlqboIx65CjmIIOr3wHXk",
    authDomain: "restaurant-9edee.firebaseapp.com",
    projectId: "restaurant-9edee",
    storageBucket: "restaurant-9edee.appspot.com",
    messagingSenderId: "611235844743",
    appId: "1:611235844743:web:c88dfcff5fe46ec2dd9e22"
};

// npm install firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);