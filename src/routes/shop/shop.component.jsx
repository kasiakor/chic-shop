import { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  console.log("categoriesMap", categoriesMap);

  return (
    <Fragment>
      {/* returns array with titles ["hats", "jackets", "mens", "sneakers", "womens"] */}
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
          {/* {
            "id": 1,
            "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
            "price": 25,
            "name": "Brown Brim"
        }, */}
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
