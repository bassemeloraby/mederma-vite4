import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  // initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      const { drug } = action.payload;
      const product = state.cartItems.find(
        (i) => i.productID === drug.productID
      );
      if (product) {
        toast.warning("Item is already added to cart");
      } else {
        state.cartItems.push(drug);

        toast.success("Item added to cart");
      }
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      // // localStorage.removeItem("cart");
      // // state.cartItems = defaultState
      // console.log("clearCart ya weld",action.payload);
      return defaultState;
    },
    removeItem: (state, action) => {
      const { productID } = action.payload;
      // const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (i) => i.productID !== productID
      );
      toast.success("Item removed from cart");
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
