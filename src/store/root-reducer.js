import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  cart: cartReducer,
});
