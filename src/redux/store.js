import { configureStore } from "@reduxjs/toolkit";
import likedProductsSlice from "./likedProductsSlice";
import cartProductsSlice from "./cartProductsSlice";
import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";

const store = configureStore({
   reducer: {
      likedProducts: likedProductsSlice,
      cartProducts: cartProductsSlice,
      filterSlice: filterSlice,
      paginationSlice: paginationSlice,
   },
});

const subscribe = store.subscribe(() => {
   console.log(store.getState());
});

export default store;
