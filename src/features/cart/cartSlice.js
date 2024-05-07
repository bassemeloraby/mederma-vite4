import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
};
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { drug } = action.payload;

      state.cartItems.push(drug);

      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      toast.error("Item removed from cart");
    },
    // editItem: (state, action) => {
    //   const { cartID } = action.payload;
    //   const item = state.cartItems.find((i) => i.cartID === cartID);
    //   toast.success('Cart updated');
    // },
    // calculateTotals: (state) => {
    //   state.tax = 0.1 * state.cartTotal;
    //   state.orderTotal = state.cartTotal + state.shipping + state.tax;
    //   localStorage.setItem('cart', JSON.stringify(state));
    // },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
