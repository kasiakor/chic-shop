import { createContext, useState } from "react";

const deleteCartItem = (cartItems, productToDelete) => {
  // delete item in array
  return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
};

const removeCartItem = (cartItems, productToRemove) => {
  // decrease quantity if item in array
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

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
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
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

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const deleteItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete));
  };

  const value = {
    isDrawerOpen,
    setIsDrawerOpen,
    addItemToCart,
    cartItems,
    totalItems,
    setTotalItems,
    removeItemFromCart,
    deleteItemFromCart,
  };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
