import { createContext, useState } from "react";

// bring products
import PRODUCTS from "../shop-data.json";

// actual value
// it will return the object that will be passed as value to Provider, current user
export const ProductsContext = createContext({
  products: [],
});

// provider component
export const ProductsProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
