import CATEGORY_ACTION_TYPES from "./category.types";

const setCategories = (categoriesArray) => {
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
    payload: categoriesArray,
  };
};

export default setCategories;
