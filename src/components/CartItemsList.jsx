import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Fragment, useState } from "react";
import FormInput from "./form/FormInput";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
const url = "/specialArrays";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const [listName, setListName] = useState("");
  const saveSpecialAr = async () => {
    console.log(listName);
    const specialArraysData = { Description: listName, content: cartItems };
    const response = await customFetch.post(url, specialArraysData);
    const mainRes = response.data;
    toast.success("list is saved successfully")
    console.log(mainRes);
  };

  return (
    <Fragment>
      {cartItems.map((item, i) => {
        return <CartItem key={i} cartItem={item} />;
      })}
      {cartItems.length > 0 && (
        <div className="mb-8">
          <FormInput
            label="Name of the list"
            type="text"
            size="input-sm mb-8"
            onChange={(e) => setListName(e.target.value)}
          />
          <button onClick={saveSpecialAr} className="btn btn-accent btn-sm">
            save
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default CartItemsList;
