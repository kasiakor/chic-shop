import CategoryItem from "../category-item/category-item.component.jsx";
import "./categories.styles.scss";

const Categories = (props) => {
  console.log("props.categories", props.categories);
  const { categories } = props;

  return (
    <div
      className="categories-container"
      // style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;