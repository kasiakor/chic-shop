import CategoryItem from "../category-item/category-item.component.jsx";
import "./categories.styles.scss";

const Categories = (props) => {
  const { categories } = props;
  console.log("lalalal", props);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
