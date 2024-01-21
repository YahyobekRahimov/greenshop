import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Product from "./ProductCartItems";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import {
   addAllProductsToCart,
   removeFromCart,
} from "../../redux/cartProductsSlice";

export default function ProductCart() {
   const dispatch = useDispatch();
   const data =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
   dispatch(addAllProductsToCart(data));
   const items = useSelector((state) => state.cartProducts);
   const handleDelete = (productId) => {
      dispatch(removeFromCart(productId));
      const data =
         JSON.parse(localStorage.getItem("productsInCart")) || [];
      const index =
         data[data.findIndex((prod) => prod.id == productId)];
      data.splice(index, 1);
      localStorage.setItem("productsInCart", JSON.stringify(data));
   };

   return (
      <Container>
         <div className="mt-16 flex justify-between gap-16">
            <div className="text-left  w-[48.75rem]">
               <table className="w-full">
                  <thead className="border-b-2 ">
                     <tr className="mb-3 grid grid-cols-[0.9fr_2.3fr_0.5fr_1fr_1fr] items-center justify-items-center">
                        <th className="px-6 py-2">Products</th>
                        <th className="px-6 py-2">Name</th>
                        <th className="px-6 py-2">Price</th>
                        <th className="px-6 py-2">Quantity</th>
                        <th className="px-6 py-2">Action</th>
                     </tr>
                  </thead>
                  <tbody className="bg-green-600 mb-3">
                     {items &&
                        items.map((item) => (
                           <Product
                              key={item.id}
                              product={item}
                              quantity={item.quantity}
                              onDelete={() => handleDelete(item.id)}
                           />
                        ))}
                  </tbody>
               </table>
            </div>
            <div className="bg-white w-[20.625rem]">
               <CartTotal />
            </div>
         </div>
      </Container>
   );
}
