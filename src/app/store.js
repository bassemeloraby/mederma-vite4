import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import specialArReducer from "../features/specialAr/specialArSlice";


export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    specialArState: specialArReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
