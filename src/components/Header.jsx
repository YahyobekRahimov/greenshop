import Container from "./Container";
import { NavLink } from "react-router-dom";

export default function Header() {
   return (
      <Container>
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
      </Container>
   );
}
