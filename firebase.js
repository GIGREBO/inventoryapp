// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFdj9j0YnAWjQ2s19gZVzvJ7jSbi5lTjc",
  authDomain: "inventoryapp-d1f9f.firebaseapp.com",
  projectId: "inventoryapp-d1f9f",
  storageBucket: "inventoryapp-d1f9f.appspot.com",
  messagingSenderId: "14248652817",
  appId: "1:14248652817:web:056f298accb99072d281b0",
  measurementId: "G-0T8LQEVW02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export {firestore}