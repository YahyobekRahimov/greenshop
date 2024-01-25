import { configureStore } from "@reduxjs/toolkit";
import likedProductsSlice from "./likedProductsSlice";
import cartProductsSlice from "./cartProductsSlice";
import filterSlice from "./filterSlice";
import paginationSlice from "./paginationSlice";
import loginWindowSlice from "./loginWindowSlice";

const store = configureStore({
   reducer: {
      likedProducts: likedProductsSlice,
      cartProducts: cartProductsSlice,
      filterSlice: filterSlice,
      paginationSlice: paginationSlice,
      loginWindowSlice: loginWindowSlice,
   },
});

const subscribe = store.subscribe(() => {
   console.log(store.getState());
});

export default store;
