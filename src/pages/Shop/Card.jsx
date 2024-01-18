import Container from "../../components/Container";
import JSON_DATA from "../../../data/data.json";
import { useEffect, useState } from "react";
import SearchIcon from "../../images/searchicon.svg?react";
import LikeIcon from "../../components/LikeIcon";
import ShoppingIcon from "../../images/shoppingIcon.svg?react";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import MyPagination from "./MyPagination";
import { setPagination } from "../../redux/paginationSlice";
import PlantImage from "/src/images/plant10.png";

export default function Products(props) {
   const { value, filteredProducts } = props;
   const [products, setProducts] = useState(null);
   const page = useSelector((state) => state.paginationSlice);
   const dispatch = useDispatch();
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));

   const data = filteredProducts ?? JSON_DATA;
   let count = Math.ceil(data.length / 16);
   let PRODUCTS;
   if (value == 1) {
      PRODUCTS = data;
   }

   if (value == 2) {
      PRODUCTS = data.filter((item) => item.price > 20);
   }
   if (value == 3) {
      PRODUCTS = data.filter((item) => item.price < 20);
   }

   let result = products ?? PRODUCTS.slice(0, 16);

   function returnState(product) {
      if (!(likedProducts.length > 1)) {
         return false;
      }
      try {
         for (let i = 0; i < likedProducts.length; i++) {
            let element = likedProducts[i];
            if (element == null) {
               continue;
            }
            if (product.id === element.id) {
               return true;
            }
         }
      } catch (error) {
         console.log(error);
      }
      return false;
   }
   function handlePaginationChange(e, value) {
      let start = (value - 1) * 16;
      let end = value * 16;
      setProducts(data.slice(start, end));
      dispatch(setPagination(value));
   }
   return (
      <>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
            {result.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg bg-softBackground transition duration-300 transform hover:shadow-lg hover:scale-105"
               >
                  <img
                     className="w-[14rem] h-[14rem] object-cover mb-3 transition duration-300 transform hover:scale-110"
                     src={PlantImage}
                     alt={product.name}
                  />
                  <h3 className="text-[1.2rem] h-14">
                     {product.name}
                  </h3>
                  <h4 className="font-bold text-primary text-center text-[1.25rem]">
                     ${product.price}
                  </h4>
                  <div className="mt-2 px-5 flex justify-between text-center ">
                     <div className="w-max h-max px-3 py-2 rounded-lg border-2 border-solid border-slate-400 ">
                        {" "}
                        <ShoppingIcon className="  w-[3rem] h-[2rem]" />
                     </div>
                     <LikeIcon
                        product={product}
                        state={returnState(product)}
                     />
                  </div>
               </div>
            ))}
         </div>
         <MyPagination
            count={count}
            handlePaginationChange={handlePaginationChange}
            page={page}
         />
      </>
   );
}
