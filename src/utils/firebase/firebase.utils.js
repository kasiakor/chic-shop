// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

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

// Instatiate database
export const db = getFirestore();

// get authentication object and store it in the firestore

// check if there is there is existing document reference
// / object/instance of document model

// use uid on the sing-in response for user as doc identifier
// set and get data using reference
export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());
  // false, does not exist yet in db

  // if user data does not exist
  // create/ set the document with data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exists
  // return userDocRef
  return userDocRef;
};
