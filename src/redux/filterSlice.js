import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
   name: "filter slice",
   initialState: {},
   reducers: {
      addCategory: (state, { payload }) => {
         state.category == payload;
      },
      addPriceRange: (state, { payload }) => {
         state.priceStart = payload.priceStart;
         state.priceEnd = payload.priceEnd;
      },
   },
});

export const { addCategory, addPriceRange } = filterSlice.actions;

export default filterSlice.reducer;
