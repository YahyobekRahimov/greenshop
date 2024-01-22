import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      username: null,
      email: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
      photo: null,
      address: null,
      orders: null,
      reports: null,
      downloads: null,
      support: null,
   },

   reducers: {
      addUserInfo: (state, { payload }) => {
         state.username = payload.username ?? state.username;
         state.email = payload.email ?? state.email;
         state.firstName = payload.firstName ?? state.firstName;
         state.lastName = payload.lastName ?? state.lastName;
         state.phoneNumber = payload.phoneNumber ?? state.phoneNumber;
         state.photo = payload.photo ?? state.photo;
         state.address = payload.address ?? state.address;
         state.orders = payload.orders ?? state.orders;
         state.reports = payload.reports ?? state.reports;
         state.downloads = payload.downloads ?? state.downloads;
         state.support = payload.support ?? state.support;
      },
   },
});

export const { addUserInfo } = userSlice.actions;

export default usersSlice.reducer;
