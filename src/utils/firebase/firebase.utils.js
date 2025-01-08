// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  writeBatch,
} from "firebase/firestore";

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

// this is google provider
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// singleton class to keep the authentication data
export const auth = getAuth();

//authenticate with popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//authenticate with redirect
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// Instatiate database
export const db = getFirestore();

// get authentication object and store it in the firestore

// check if there is there is existing document reference
// / object/instance of document model

// use uid on the sing-in response for user as doc identifier
// set and get data using reference
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  // users is a collection
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
        // add display name if  null
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  // if user data exists
  // return userDocRef
  return userDocRef;
};

// store data in db from the front end
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// helper functions
export const createAuthUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// observable listener, stream of events sign in/sign out to keep track of user value
// whenever the auth state changes the callback will be called
// when user signs in and signs out
// permanently open listener, return when the user provider unmounts

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);
