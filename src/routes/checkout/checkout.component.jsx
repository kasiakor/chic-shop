import { useContext } from "react";
import { DrawerContext } from "../../context/drawer.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(DrawerContext);
  console.log("cartItems", cartItems);

  return (
    <div>
      <h1>Checkout Page</h1>
      {cartItems.map(cartItem => {
        const {name, quantity} = cartItem;
        return (
            <div>
                <h1>{name}</h1>
                <span>{quantity}</span>
            </div>
        )
      })}
    </div>
  );
};
export default Checkout;
