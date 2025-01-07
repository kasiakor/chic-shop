import { useContext } from "react";
import { DrawerContext } from "../../context/drawer.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(DrawerContext);
  console.log("cartItems", cartItems);

  return (
    <div>
      <h1>Checkout Page</h1>
      {cartItems.map((cartItem) => {
        const { name, quantity } = cartItem;
        return (
          <div>
            <h1>{name}</h1>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
