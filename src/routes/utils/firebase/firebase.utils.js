// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKvxELkEHsOeFFSjQS3CpWWROr2tsQ9ME",
  authDomain: "chic-eshop-db.firebaseapp.com",
  projectId: "chic-eshop-db",
  storageBucket: "chic-eshop-db.firebasestorage.app",
  messagingSenderId: "832890057649",
  appId: "1:832890057649:web:1192a802d61b982199c390",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
