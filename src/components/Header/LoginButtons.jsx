import React, { useState } from "react";
import LogoutIcon from "../../images/Logout.svg?react";
import EnterAccunt from "../../images/userAccount.svg?react";

export default function LoginButton() {
   const value = document.cookie;

   return (
      <div className="flex items-center gap-1">
         {value != "" ? (
            <>
               <LogoutIcon />
               <span>Login</span>
            </>
         ) : (
            <>
               <EnterAccunt className="w-[1.5rem] h-[1.5rem]" />
               <span>My Account</span>
            </>
         )}
      </div>
   );
}
