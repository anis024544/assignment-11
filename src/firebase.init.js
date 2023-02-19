// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASb9ixWCzTBdBPaR07B1i14or-nwe5RxE",
  authDomain: "book-store-16afc.firebaseapp.com",
  projectId: "book-store-16afc",
  storageBucket: "book-store-16afc.appspot.com",
  messagingSenderId: "1006515897974",
  appId: "1:1006515897974:web:394facb24290fe111e4157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;