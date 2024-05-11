import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Fragment, useEffect, useState } from "react";
import FormInput from "./form/FormInput";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
const url = "/specialArrays";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const [items, setItems] = useState(cartItems);
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();


  const saveSpecialAr = async () => {
    console.log(listName);
    const specialArraysData = { Description: listName, content: cartItems };
    const response = await customFetch.post(url, specialArraysData);
    const mainRes = response.data;
    toast.success("list is saved successfully")
    console.log(mainRes);
  };

  const clearHandler =()=>{
    dispatch(clearCart())
    setItems([])
  }


  return (
    <Fragment>
      {items.map((item, i) => {
        return <CartItem key={i} cartItem={item} />;
      })}
      {items.length > 0 && (
        <div className="mb-8 px-8 py-4">
          <FormInput
            label="Name of the list"
            type="text"
            size="input-sm mb-8"
            onChange={(e) => setListName(e.target.value)}
          />
          <button onClick={saveSpecialAr} className="btn btn-accent btn-sm me-2">
            save
          </button>
          <button onClick={clearHandler} className="btn btn-primary btn-sm">
            clear
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default CartItemsList;
