import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <p>
        <b>Items in cart - {cartItems.length}</b>
      </p>
      <button className="btn btn-secondary" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <p>
        {" "}
        {cartItems.map((item) => (
          <li>{item}</li>
        ))}
      </p>
    </>
  );
};
export default Cart;
