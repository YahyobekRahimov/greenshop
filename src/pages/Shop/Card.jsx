import Container from "../../components/Container";
import data from '../../../data/data.json'
import { useEffect } from "react";
import SearchIcon from '../../images/searchicon.svg?react'
import LikeIcon from '../../images/likeIcon.svg?react'
import ShoppingIcon from '../../images/shoppingIcon.svg?react'

export default function Products() {
   let products = data.slice(2);
   return (
      <Container>
         <h2 className="text-[2rem] text-center">Products</h2>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
            {products.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg bg-softBackground transition duration-300 transform hover:shadow-lg hover:scale-105"
               >
                  <img
                     className="w-[14rem] h-[14rem] object-cover mb-3 transition duration-300 transform hover:scale-110"
                     src={product.image}
                     alt={product.name}
                  />
                  <h3 className="text-[1.2rem] h-14">
                     {product.name}
                  </h3>
                  <h4 className="font-bold text-primary text-[1.25rem]">
                     ${product.price}
                  </h4>
                  <div className="mt-2 px-5 flex gap-10 text-center ">
                     <ShoppingIcon  />
                     <LikeIcon/>
                     <SearchIcon/>
                  </div>
               </div>
            ))}
         </div>
      </Container>
   );
}
