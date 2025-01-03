import { createContext, useState } from "react";

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
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
