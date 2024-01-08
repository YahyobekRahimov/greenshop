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
               <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
               <NavLink to="/plant-care">Plant Care</NavLink>
            </li>
            <li>
               <NavLink to="/blogs">Blogs</NavLink>
            </li>
         </ul>
      </Container>
   );
}
