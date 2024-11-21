// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgoPOOr9SmKwJw-p0orDH1KD3PRwLroQU",
  authDomain: "python-cv-course-a91b0.firebaseapp.com",
  projectId: "python-cv-course-a91b0",
  storageBucket: "python-cv-course-a91b0.firebasestorage.app",
  messagingSenderId: "425931545127",
  appId: "1:425931545127:web:f482b6351cfb5f1bac0c02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();