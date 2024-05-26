import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Fragment, useEffect, useState } from "react";
import FormInput from "./form/FormInput";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";
const url = "/specialArrays";

const CartItemsList = () => {
  const { cartItems, oldListName, list_id } = useSelector(
    (state) => state.cartState
  );
  const [items, setItems] = useState(cartItems);
  console.log(cartItems);
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  const saveSpecialAr = async () => {
    console.log(listName);
    if (!listName) {
      toast.error("please provide a list name");
    }
    const specialArraysData = { Description: listName, content: cartItems };
    try {
      const response = await customFetch.post(url, specialArraysData);
      const mainRes = response.data;

      toast.success("list is saved successfully");
      console.log(mainRes);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  const clearHandler = () => {
    dispatch(clearCart());
    setItems([]);
  };

  const updateSpecialAr = async () => {
    console.log(cartItems);
    console.log(list_id);
    try {
      const response = await customFetch.patch(`${url}/${list_id}`, {
        content: cartItems,
      });
      const mainRes = response.data;

      toast.success("list is updated successfully");
      console.log(mainRes);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);
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
            defaultValue={oldListName}
          />
          <button
            onClick={saveSpecialAr}
            className="btn btn-accent btn-sm me-2"
          >
            save
          </button>
          <button
            onClick={clearHandler}
            className="btn btn-primary btn-sm me-2"
          >
            clear
          </button>
          <button onClick={updateSpecialAr} className="btn btn-accent btn-sm">
            update
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default CartItemsList;
