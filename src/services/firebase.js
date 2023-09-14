// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidzHDVBrgS0TvYLZgIZylZ79afgzyJso",
  authDomain: "proyecto-final-shinyshine.firebaseapp.com",
  projectId: "proyecto-final-shinyshine",
  storageBucket: "proyecto-final-shinyshine.appspot.com",
  messagingSenderId: "197983560100",
  appId: "1:197983560100:web:f1f2d5dee8d7ead6bea131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)