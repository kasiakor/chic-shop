import { useContext } from "react";
import { DrawerContext } from "../../context/drawer.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(DrawerContext);
  const { name, quantity, imageUrl, price } = cartItem;

  const deleteItemFromCartHandler = () => {
    deleteItemFromCart(cartItem);
  };

  const addItemToCartHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemFromCartHandler = () => {
    removeItemFromCart(cartItem);
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
