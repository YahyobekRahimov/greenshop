import React from "react";
import LogoutIcon from "../../images/Logout.svg?react";

export default function LoginButton() {
   return (
      <div className="hover:bg-primaryDark items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
         <LogoutIcon />
         Login
      </div>
   );
}
