import { createContext, useState } from "react";

// bring products
// import SHOP_DATA from "../shop-data.js";

// bring method to store data in firestore
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

// actual value
// it will return the object that will be passed as value to Provider, current user
export const ProductsContext = createContext({
  products: [],
});

// provider component
export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);

  // run only once to store data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
