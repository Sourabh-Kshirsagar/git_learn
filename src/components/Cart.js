import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //we also wrote like this
  //Way One best way
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // with this handleclearcart we able to clear the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // we also write like this
  //Way Two
  // this will make major performance issue because we subscribe to the whole store if
  // something changes in the store it will update all the things everywhere
  // const store = useSelector((store) => store);

  return (
    <>
      {/* // Way one */}
      <p>
        <b>Items in cart - {cartItems.length}</b>
        {/* way two bad way to subscribe the store*/}
        {/* <p>{store.cart.items.length}</p> */}
      </p>
      <button className="btn btn-secondary" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      {/* Showing the items to be added in the cart */}
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
