import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

//action
export const { setCategories } = categoriesSlice.actions;

//reducer
export const categoriesReducer = categoriesSlice.reducer;
