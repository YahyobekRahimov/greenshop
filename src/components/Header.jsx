import Container from "./Container";
import { NavLink } from "react-router-dom";
import Logo from '../img/logo.svg?react'
import Search from '../img/search.svg?react'
import ShoppingIcon from '../img/shopping.svg?react'

export default function Header() {
   return (
      <Container classes='flex justify-between items-center '>
         <div>
            <Logo/>
         </div>
         <div>
            <ul className="list-none flex gap-5">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/shop/product/1">Product View</NavLink>
            </li>
            <li>
               <NavLink to="/shop/cart">Shopping Cart</NavLink>
            </li>
            <li>
               <NavLink to="/shop/checkout">Checkout</NavLink>
            </li>
         </ul>
         </div>
         <div className="flex gap-8">
            <Search/>
            <ShoppingIcon/>
         </div>
      </Container>
   );
}
