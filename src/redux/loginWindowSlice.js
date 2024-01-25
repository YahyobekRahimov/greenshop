import { createSlice } from "@reduxjs/toolkit";

const loginWindowSlice = createSlice({
   name: "Login Window Open",
   initialState: true,
   reducers: {
      toggleLoginWindow: (state, { payload }) => {
         state = payload;
         return state;
      },
   },
});

export const { toggleLoginWindow } = loginWindowSlice.actions;

export default loginWindowSlice.reducer;
