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
import { useNavigate } from "react-router-dom";
import AddToCart from "/src/components/AddToCart";
import { addAllProductsToCart } from "/src/redux/cartProductsSlice.js";

export default function Products(props) {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { value, filteredProducts } = props;
   const [products, setProducts] = useState(null);
   const page = useSelector((state) => state.paginationSlice);

   // * getting the liked products from local storage
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));

   // * getting the products added to cart from localStorage
   let productsInCart =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
   dispatch(addAllProductsToCart(productsInCart));

   // * redirecting the user to product details page.
   function handleCardClick(product, PlantImage) {
      let PRODUCT = { ...product, image: PlantImage };
      navigate(`/shop/${PRODUCT.id}`, { state: { key: PRODUCT } });
   }

   // * returns whether the product given to it is liked or not
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

   // * returns whether the product added to cart or not
   function isAddedToCart(product) {
      if (!productsInCart.length) {
         return false;
      }

      try {
         for (let i = 0; i < productsInCart.length; i++) {
            const element = productsInCart[i];
            if (!element) {
               continue;
            }
            if (element.id == product.id) {
               return true;
            }
         }
      } catch (error) {
         console.log(error);
      }
      return false;
   }

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
   function handlePaginationChange(e, value) {
      let start = (value - 1) * 16;
      let end = value * 16;
      setProducts(data.slice(start, end));
      dispatch(setPagination(value));
   }

   return (
      <>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10 cursor-pointer">
            {result.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg bg-softBackground transition duration-300 transform hover:shadow-lg hover:scale-105"
                  onClick={() => handleCardClick(product, PlantImage)}
               >
                  <img
                     className="w-[14rem] h-[14rem] object-cover mb-3 transition duration-300 transform"
                     src={PlantImage}
                     alt={product.name}
                  />
                  <h3 className="text-[1.2rem] h-14">
                     {product.name}
                  </h3>
                  <h4 className="font-bold text-primary text-center text-[1.25rem]">
                     ${product.price}
                  </h4>
                  <div className="flex justify-around">
                     <LikeIcon
                        product={product}
                        state={returnState(product)}
                     />
                     <AddToCart
                        product={product}
                        state={isAddedToCart(product)}
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
