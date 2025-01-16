import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "../shop/shop.styles.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // {
  //   /* returns array with titles ["hats", "jackets", "mens", "sneakers", "womens"] */
  // }

  const categoriesMap = useSelector(selectCategoriesMap);

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
