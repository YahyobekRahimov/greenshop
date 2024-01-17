import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
   name: "filter slice",
   initialState: {
      priceStart: 0,
      priceEnd: 1000,
      category: "",
   },
   reducers: {
      addCategory: (state, { payload }) => {
         state.category = payload;
         return state;
      },
      addPriceRange: (state, { payload }) => {
         state.priceStart = payload.priceStart;
         state.priceEnd = payload.priceEnd;
         return state;
      },
   },
});

export const { addCategory, addPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
