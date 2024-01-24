import { useDispatch, useSelector } from "react-redux";
import {
   incrementQuantity,
   decrementQuantity,
} from "../../../redux/cartProductsSlice";
import plantImage from "/src/images/plant11.png";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "/src/images/Delete.svg?react";

const Product = ({ product, quantity, onDelete }) => {
   const dispatch = useDispatch();
   const handleIncrement = () => {
      dispatch(incrementQuantity(product.id));
      const data =
         JSON.parse(localStorage.getItem("productsInCart")) || [];
      data[data.findIndex((prod) => prod.id == product.id)]
         .quantity++;
      localStorage.setItem("productsInCart", JSON.stringify(data));
   };
   const handleDecrement = () => {
      dispatch(decrementQuantity(product.id));
      const data =
         JSON.parse(localStorage.getItem("productsInCart")) || [];
      data[data.findIndex((prod) => prod.id == product.id)]
         .quantity--;
      localStorage.setItem("productsInCart", JSON.stringify(data));
   };
   const count = useSelector(
      (state) =>
         state.cartProducts[
            state.cartProducts.findIndex(
               (prod) => prod.id == product.id
            )
         ].quantity
   );
   return (
      <tr className="bg-softBackground w-full grid grid-cols-[0.9fr_3fr_0.5fr_1fr_1fr] items-center">
         <td className="px-6 py-2">
            <img
               src={plantImage}
               alt={product.name}
               className="w-20 h-70 rounded-md object-cover"
            />
         </td>
         <td className="px-6 py-2">
            <p className="text-sm font-semibold">{product.name}</p>
            <span className="text-textThird mt-1 text-[.875rem]">
               SKU: {Math.round(Math.random * 100000)}
            </span>
         </td>
         <td className="px-6 py-2">{product.price}</td>
         <td className="px-6 py-2 flex items-center gap-2">
            <button
               onClick={handleDecrement}
               disabled={quantity <= 1}
               className={`bg-primary text-white w-[1.31rem] h-[1.56rem] flex items-center justify-center rounded-full ${
                  quantity <= 1 ? "opacity-60 cursor-not-allowed" : ""
               }`}
            >
               -
            </button>
            <span className="font-semibold w-[1.5rem] text-center">
               {count}
            </span>
            <button
               onClick={handleIncrement}
               className="bg-primary text-white w-[1.31rem] h-[1.56rem] flex items-center justify-center rounded-full"
            >
               +
            </button>
         </td>
         <td className="px-6 py-2">
            <IconButton onClick={onDelete}>
               <DeleteIcon />
            </IconButton>
         </td>
      </tr>
   );
};

export default Product;
