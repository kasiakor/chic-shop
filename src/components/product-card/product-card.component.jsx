import { useContext } from "react";
import { DrawerContext } from "../../context/drawer.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart, setTotalItems } = useContext(DrawerContext);

  const handleAddProduct = () => {
    addItemToCart(product);
    setTotalItems((prev) => prev + 1);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddProduct}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
