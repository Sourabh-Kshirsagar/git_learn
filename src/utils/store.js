import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// This configureStore will take the slices and configure them in our store
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
