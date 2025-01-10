import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";

// actual value
// it will return the object that will be passed as value to Provider, current user
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// provider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // it receives a callback function
    // onAuthStateChanged method also returns an unsubscriber function which allows
    // us to stop listening for events
    // what is passed is either the authenticated user obj or null
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
