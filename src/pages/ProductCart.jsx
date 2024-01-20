import { useState } from "react";
import products from "../../data/blog.posts.json";
import Container from "../components/Container";
import Product from "../components/ProductCart";
import CartTotal from "./Shop/CartTotal";

export default function ProductCart() {
   const [items, setItems] = useState(
      products.map((product) => ({ ...product, quantity: 1 }))
   );

   const handleQuantityChange = (productId, newQuantity) => {
      setItems((prevItems) =>
         prevItems.map((item) =>
            item.id === productId
               ? { ...item, quantity: newQuantity }
               : item
         )
      );
   };

   const handleDelete = (productId) => {
      setItems((prevItems) =>
         prevItems.filter((item) => item.id !== productId)
      );
   };

   return (
      <Container>
         <div className="mt-16 flex justify-between gap-16">
            <div className="text-left mx-auto px-4 w-[48.75rem]">
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
                              onQuantityChange={(newQuantity) =>
                                 handleQuantityChange(
                                    item.id,
                                    newQuantity
                                 )
                              }
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
