import { createContext, useEffect, useState } from "react";

// bring products
// import SHOP_DATA from "../shop-data.js";

// bring method to store data in firestore
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// get data from firestore
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// actual value
// it will return the object that will be passed as value to Provider, current user
export const CategoriesContext = createContext({
  categoriesMap: {},
});

// provider component
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // get data from firestore
  useEffect(() => {
    const getCategories = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      console.log("firestore cat map", categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getCategories();
  }, []);

  // run only once to store data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
