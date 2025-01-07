import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // increase quantity if item in array
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // add new item to the array
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// actual value
// it will return the object that will be passed as value to Provider, current user
export const DrawerContext = createContext({
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalItems: 0,
});

// provider component
export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isDrawerOpen,
    setIsDrawerOpen,
    addItemToCart,
    cartItems,
    totalItems,
    setTotalItems,
  };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
