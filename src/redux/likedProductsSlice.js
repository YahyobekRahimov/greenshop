import { createSlice } from "@reduxjs/toolkit";

const likedProductsSlice = createSlice({
   name: "Liked Products",
   initialState: [],
   reducers: {
      addLikedProduct: (state, { payload }) => {
         state.push(payload);
      },
      removeLikedProduct: (state, { payload }) => {
         for (let i = 0; i < state.length; i++) {
            const product = state[i];
            if (product.id === payload) {
               state.splice(i, 1);
               break;
            }
         }
      },
   },
});
