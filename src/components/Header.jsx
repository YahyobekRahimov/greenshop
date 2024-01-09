import Container from "./Container";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg?react";
import ShoppingIcon from "../images/shoppingC.svg?react";
import Search from "../images/search.svg?react";
import Login from "../images/Logout.svg?react";
import ColorBadge from "./ColorBadge";
import { useLocation } from "react-router-dom";
import ModalSearch from "./ModalSearch";
import { useState } from "react";

export default function Header() {
   function handleclick(e) {
      setModalSearch(true);
   }
   const [modalSearch, setModalSearch] = useState(false);
   const location = useLocation();

   return (
      <div className="mt-[1.5rem]">
         <Container classes="flex justify-between items-center ">
            <div className="cursor-pointer">
               <NavLink to="/" ><Logo /></NavLink>
            </div>
            <div>
               <ul className="list-none flex gap-16 items-center">
                  <li
                     className={`hover:text-green-600 text-green-700`}
                  >
                     <NavLink
                        className={`${
                           location.pathname == "/"
                              ? " pb-[1.45rem] border-solid border-b-4 border-b-green-600 text-green-700"
                              : "border-b-white text-black"
                        }`}
                        to="/"
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className="hover:text-green-600">
                     <NavLink
                        className={`${
                           location.pathname == "/shop"
                              ? " pb-[1.45rem] border-solid border-b-4 border-b-green-600 text-green-700"
                              : "border-b-white text-black"
                        }`}
                        to="/shop"
                     >
                        Shop
                     </NavLink>
                  </li>
                  <li className="hover:text-green-600">
                     <NavLink
                        className={`${
                           location.pathname == "/plant-care"
                              ? " pb-[1.45rem] border-solid border-b-4 border-b-green-600 text-green-700"
                              : "border-b-white text-black"
                        }`}
                        to="/plant-care"
                     >
                        Plant Care
                     </NavLink>
                  </li>
                  <li className="hover:text-green-600">
                     <NavLink
                        className={`${
                           location.pathname == "/blogs"
                              ? "pb-[1.45rem] border-solid border-b-4 border-b-green-600 text-green-700"
                              : "border-b-white text-black"
                        }`}
                        to="/blogs"
                     >
                        Blogs
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div className="  flex gap-8 items-center">
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
               <button className=" hover:bg-primaryDark items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
                  <Login />
                  Login
               </button>
            </div>
         </Container>
         <Container>
            <div className="h-[0.3px] w-full bg-green-200 mt-4"></div>
         </Container>
      </div>
   );
}
