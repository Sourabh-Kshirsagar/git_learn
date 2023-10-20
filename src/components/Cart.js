import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  <p>{cartItems.length}</p>;
  return <p>this is my cart</p>;
};
export default Cart;
