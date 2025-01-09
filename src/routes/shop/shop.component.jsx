import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  // {
  //   /* returns array with titles ["hats", "jackets", "mens", "sneakers", "womens"] */
  // }

  console.log("categoriesMap", categoriesMap);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default Shop;
