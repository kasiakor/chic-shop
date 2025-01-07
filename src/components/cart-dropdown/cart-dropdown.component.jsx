import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context/drawer.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(DrawerContext);

  const navigate = useNavigate();

  const checkoutButtonHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutButtonHandler}>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
