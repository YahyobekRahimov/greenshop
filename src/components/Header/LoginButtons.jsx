import React, { useState } from "react";
import LogoutIcon from "../../images/Logout.svg?react";
import { getCookie } from "../../JavaScript/Cookies";
import MyAccountButton from "./MyAccountButton";
import { Button } from "@mui/material";

export default function LoginButton({ handleOpen }) {
   const cookie = getCookie("userInfo");
   console.log(cookie);
   if (cookie) {
      const [username, email] = cookie.split("|Divider|");
      console.log(username, email);
   }
   return (
      <div className="flex items-center gap-1">
         {cookie ? (
            <MyAccountButton />
         ) : (
            <Button
               onClick={handleOpen}
               variant="contained"
               className="flex gap-1"
            >
               <LogoutIcon />
               <span>Login</span>
            </Button>
         )}
      </div>
   );
}
