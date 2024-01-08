import Container from "./Container";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg?react";
import ShoppingIcon from "../images/shoppingC.svg?react";
import Search from "../images/search.svg?react";
import Login from "../images/Logout.svg?react";
import ColorBadge from "./ColorBadge";

export default function Header() {
   return (
      <Container classes="flex justify-between items-center mb-[1rem] ">
         <div>
            <Logo />
         </div>
         <div>
            <ul className="list-none flex gap-5">
               <li>
                  <NavLink to="/">Home</NavLink>
               </li>
               <li>
                  <NavLink to="/shop">Shop</NavLink>
               </li>
               <li>
                  <NavLink to="/plant-care">Plant Care</NavLink>
               </li>
               <li>
                  <NavLink to="/blogs">Blogs</NavLink>
               </li>
            </ul>
         </div>
         <div className="flex gap-8 items-center">
            <Search />
            <ColorBadge />
            <button className=" items-center flex gap-[0.25rem] text-white px-[1.0625rem] py-[0.5rem] rounded-md bg-green-600">
               <Login/> 
               Login
            </button>
         </div>
         
      </Container>
      
   );
}
