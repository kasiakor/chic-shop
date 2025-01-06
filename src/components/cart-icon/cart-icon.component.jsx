import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { DrawerContext } from "../../context/drawer.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(DrawerContext);

  const toggleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  console.log("value of drawer", isDrawerOpen);
  return (
    <div className="cart-icon-container" onClick={toggleDrawerOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
