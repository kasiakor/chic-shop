import CATEGORY_ACTION_TYPES from "./category.types";

const setCategoriesMap = (categoriesMap) => {
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,
    payload: categoriesMap,
  };
};

export default setCategoriesMap;
