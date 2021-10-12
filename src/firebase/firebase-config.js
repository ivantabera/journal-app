import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXA3e5PaJRaN0RzLDTdrLHaaEKreAWRiw",
    authDomain: "journal-app-e5d6d.firebaseapp.com",
    projectId: "journal-app-e5d6d",
    storageBucket: "journal-app-e5d6d.appspot.com",
    messagingSenderId: "339809472130",
    appId: "1:339809472130:web:6a0d4a64eb2e6233d6ae9b",
    measurementId: "G-H0YS425GYK"
};

/* const app =  */initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}