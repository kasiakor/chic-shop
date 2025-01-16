import { useDispatch } from "react-redux";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, quantity, imageUrl, price } = cartItem;

  const deleteItemFromCartHandler = () => {
    dispatch(deleteItemFromCart(cartItem));
  };

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItem));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCartHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCartHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={deleteItemFromCartHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
