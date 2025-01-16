import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.reducer";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  // const { isDrawerOpen, setIsDrawerOpen, totalItems } =
  //   useContext(DrawerContext);

  const dispatch = useDispatch();

  const totalItems = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleDrawerOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className="cart-icon-container" onClick={toggleDrawerOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
};

export default CartIcon;
