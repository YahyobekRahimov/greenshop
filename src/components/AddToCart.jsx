import { useState } from "react";
import CartIcon from "/src/images/add-to-shopping-cart.svg?react";
import {
   addToCart,
   removeFromCart,
} from "../redux/cartProductsSlice";
import CheckCircle from "/src/images/check-circle.svg?react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddToCart({ product, state, className }) {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [added, setAdded] = useState(state);
   function handleAddClick(e) {
      e.stopPropagation();
      let data =
         JSON.parse(localStorage.getItem("productsInCart")) || [];
      if (!added) {
         // * if the user wants to add the product

         dispatch(addToCart(product));
         data.push(product);
      } else if (added) {
         navigate("/shop/cart");
         return;
      }
      localStorage.setItem("productsInCart", JSON.stringify(data));
      setAdded(true);
   }
   return (
      <div
         onClick={handleAddClick}
         className={`w-max h-max px-3 py-2 rounded-lg border-2 border-primary flex items-center bg-primary text-white ${
            added ? "gap-2 bg-transparent" : "fill-white"
         }`}
      >
         <span className={`${added ? "text-primary" : ""}`}>
            {added ? "Added" : "Add to cart"}
         </span>
         {added ? (
            <CheckCircle className={`w-[1.75rem] h-[1.75rem]`} />
         ) : (
            <CartIcon className={`w-[1.75rem] h-[1.75rem]`} />
         )}
      </div>
   );
}
