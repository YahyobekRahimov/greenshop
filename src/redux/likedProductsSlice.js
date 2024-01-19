import { createSlice } from "@reduxjs/toolkit";

const likedProductsSlice = createSlice({
   name: "Liked Products",
   initialState: [],
   reducers: {
      addAllLikedProducts: (state, { payload }) => {
         state = payload;
         return state;
      },
      addLikedProduct: (state, { payload }) => {
         if (payload) {
            state.push(payload);
         }
      },
      removeLikedProduct: (state, { payload }) => {
         for (let i = 0; i < state.length; i++) {
            let index = state.findIndex(
               (product) => product.id == payload
            );
            state.splice(index, 1);
            break;
         }
      },
   },
});

export default likedProductsSlice.reducer;

export const {
   addLikedProduct,
   removeLikedProduct,
   addAllLikedProducts,
} = likedProductsSlice.actions;
