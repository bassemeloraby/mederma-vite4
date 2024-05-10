import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Fragment } from "react";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <Fragment>
      {cartItems.map((item) => {
        return <CartItem key={item} cartItem={item} />;
      })}
    </Fragment>
  );
};
export default CartItemsList;
