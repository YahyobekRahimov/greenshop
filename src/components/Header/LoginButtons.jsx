import React, { useState } from "react";
import LogoutIcon from "../../images/Logout.svg?react";
import EnterAccunt from "../../images/userAccount.svg?react";

export default function LoginButton() {
   const value = document.cookie;
   const [account, setAccount] = useState(true);
   console.log(value);

   return (
      <div className="hover:bg-primaryDark items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
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
