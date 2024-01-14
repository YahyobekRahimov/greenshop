import { configureStore } from "@reduxjs/toolkit";
import likedProductsSlice from "./likedProductsSlice";
import cartProductsSlice from "./cartProductsSlice";

const store = configureStore({
   reducer: {
      likedProducts: likedProductsSlice,
      cartProducts: cartProductsSlice,
   },
});

const subscribe = store.subscribe(() => {
   console.log(store.getState());
});

export default store;
