import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "../shop/shop.styles.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // {
  //   /* returns array with titles ["hats", "jackets", "mens", "sneakers", "womens"] */
  // }

  const categoriesMap = useSelector((state) => state.categories.categoriesMap);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
