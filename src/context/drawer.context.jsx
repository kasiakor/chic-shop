import { createContext, useState } from "react";

// actual value
// it will return the object that will be passed as value to Provider, current user
export const DrawerContext = createContext({
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
});

// provider component
export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const value = { isDrawerOpen, setIsDrawerOpen };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
