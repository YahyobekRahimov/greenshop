import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks({ location }) {
   return (
      <div>
         <ul className="list-none flex gap-8 items-center">
            <li className={`hover:text-green-600 text-green-700`}>
               <NavLink
                  className={`pb-[1.1rem] ${
                     location.pathname === "/"
                        ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                        : "border-b-white text-black"
                  }`}
                  to="/"
               >
                  Home
               </NavLink>
            </li>
            <li className="hover:text-green-600">
               <NavLink
                  className={`pb-[1.1rem] ${
                     location.pathname == "/shop"
                        ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                        : "border-b-white text-black"
                  }`}
                  to="/shop"
               >
                  Shop
               </NavLink>
            </li>
            <li className="hover:text-green-600">
               <NavLink
                  className={`pb-[1.1rem] ${
                     location.pathname == "/about"
                        ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                        : "border-b-white text-black"
                  }`}
                  to="/about"
               >
                  About us
               </NavLink>
            </li>
            <li className="hover:text-green-600">
               <NavLink
                  className={`pb-[1.1rem] ${
                     location.pathname == "/contact"
                        ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                        : "border-b-white text-black"
                  }`}
                  to="/contact"
               >
                  Contact us
               </NavLink>
            </li>
            <li className="hover:text-green-600">
               <NavLink
                  className={`pb-[1.1rem] ${
                     location.pathname == "/blogs"
                        ? " border-solid border-b-4 border-b-green-600 text-green-700"
                        : "border-b-white text-black"
                  }`}
                  to="/blogs"
               >
                  Blogs
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
