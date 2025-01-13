import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.acions";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);

  // const { addItemToCart } = useContext(CartContext);

  const handleAddProduct = () => {
    dispatch(addItemToCart(cartItems, product));
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
