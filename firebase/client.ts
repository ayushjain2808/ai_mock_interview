// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBjxr5xxCfk2qikJw8eh9lPXArdmggDvHQ",
    authDomain: "prepwise-332ef.firebaseapp.com",
    projectId: "prepwise-332ef",
    storageBucket: "prepwise-332ef.firebasestorage.app",
    messagingSenderId: "677013026140",
    appId: "1:677013026140:web:e2a561f5af812c03063d99",
    measurementId: "G-M04405GS8M"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);