import React, { useState } from "react";
import LogoutIcon from "../../images/Logout.svg?react";
import { getCookie } from "../../JavaScript/Cookies";
import MyAccountButton from "./MyAccountButton";
import { Button } from "@mui/material";

export default function LoginButton({ handleOpen }) {
   const cookie = getCookie("userInfo");
   if (cookie) {
      const [username, email] = cookie.split("|Divider|");
   }
   return (
<<<<<<< HEAD
      <div className="hover:bg-primaryDark items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
         {account ? (
            <>
=======
      <div className="flex items-center gap-1">
         {cookie ? (
            <MyAccountButton />
         ) : (
            <Button
               onClick={handleOpen}
               variant="contained"
               className="flex gap-1"
            >
>>>>>>> 72b9f9eba1e157a7903fae53fcf298b7a50dae44
               <LogoutIcon />
               <span>Login</span>
            </Button>
         )}
      </div>
   );
}
