// Header.js
import React, { useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg?react";
import HeaderLinks from "./HeaderLinks";
import HeaderButtons from "./HeaderButtons";
import { useLocation } from "react-router-dom";


export default function Header() {
   const [modalSearch, setModalSearch] = useState(false);
   const location = useLocation();

   function handleclick() {
      setModalSearch(true);
   }

   return (
      <div className="mt-[1.5rem]">
         <Container classes="flex justify-between items-center ">
            <div className="cursor-pointer">
               <NavLink to="/"><Logo /></NavLink>
            </div>
            <HeaderLinks location={location} />
            <HeaderButtons handleclick={handleclick} setModalSearch={setModalSearch} />
         </Container>
         <Container>
            <div className="h-[0.3px] w-full bg-green-200 mt-4"></div>
         </Container>
      </div>
   );
}
