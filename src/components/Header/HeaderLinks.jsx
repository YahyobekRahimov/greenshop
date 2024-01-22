import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks({ location }) {
   return (
      <div>
         <ul className="list-none flex gap-16 items-center">
            <li className={`hover:text-green-600 text-green-700`}>
               <NavLink
                  className={`${
                     location.pathname === "/"
                        ? " pb-[1.1rem] border-solid border-b-4 border-b-green-600 text-green-700"
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
                        ? " pb-[1.1rem] border-solid border-b-4 border-b-green-600 text-green-700"
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
                        ? " pb-[1.1rem] border-solid border-b-4 border-b-green-600 text-green-700"
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
                        ? "pb-[1.1rem] border-solid border-b-4 border-b-green-600 text-green-700"
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
