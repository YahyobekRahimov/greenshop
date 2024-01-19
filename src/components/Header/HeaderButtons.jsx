import React from "react";
import SearchIcon from "../../images/search.svg?react";
import LogoutIcon from "../../images/Logout.svg?react";
import ModalSearch from "./ModalSearch";
import ColorBadge from "../ColorBadge";
import LoginButton from "./LoginButtons";
import ModalLogin from "../ModalLogin";

export default function HeaderButtons({
   handleclick,
   setModalSearch,
}) {
   const isModalSearchVisible = !setModalSearch;

   return (
      <div className="flex gap-8 items-center">
         <ModalSearch
            className={isModalSearchVisible && "block cursor-pointer"}
         />
         <ColorBadge />
         <ModalLogin />
      </div>
   );
}
