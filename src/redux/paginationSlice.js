import { createSlice } from "@reduxjs/toolkit";

const pagination = createSlice({
   name: "pagination",
   initialState: 1,
   reducers: {
      setPagination: (state, { payload }) => payload,
   },
});

export default pagination.reducer;

export const { setPagination } = pagination.actions;
