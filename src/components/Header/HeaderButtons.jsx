// HeaderButtons.js
import React from "react";
import Search from "../../images/search.svg?react";
import Login from "../../images/Logout.svg?react";
import ModalSearch from "./ModalSearch";
import ColorBadge from "../ColorBadge";

export default function HeaderButtons({ handleclick, setModalSearch }) {
   return (
      <div className="flex gap-8 items-center">
         <Search
            onClick={handleclick}
            className={`${
               setModalSearch
                  ? "hidden"
                  : " block rounded-full hover:bg-gray-100 cursor-pointer"
            }`}
         />
         <ModalSearch
            className={`${
               setModalSearch
                  ? "hidden"
                  : " block cursor-pointer"
            }`}
         />
         <ColorBadge />
         <button className="hover:bg-primaryDark items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
            <Login />
            Login
         </button>
      </div>
   );
}
