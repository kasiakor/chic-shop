const CartItem = ({ cartItem }) => {
  console.log("cartItem", cartItem.name);
  const { name, quantity } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
