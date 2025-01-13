import { createSelector } from "reselect";

// get cart
const selectCartReducer = (state) => state.cart;

// get isCartOpen
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// get cartItems
export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

// get cartItems and calculate total
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);

// get cartItems and calculate cart items
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
