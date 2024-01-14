import { createSlice } from "@reduxjs/toolkit";

const cartProductsSlice = createSlice({
   name: "Products in cart",
   initialState: [],
   reducers: {
      addToCart: (state, { payload }) => {
         state.push(payload);
      },
      removeFromCart: (state, { payload }) => {
         /**    Having received the id of the product from the payload,
          * this function returns a new state which does not
          * include the product that has been eliminated
          * */
         for (let i = 0; i < state.length; i++) {
            const product = state[i];
            if (product.id == payload) {
               state.splice(i, 1);
               break;
            }
         }
      },
   },
});

export default cartProductsSlice.reducer;

export const { addToCart, removeFromCart } =
   cartProductsSlice.actions;
