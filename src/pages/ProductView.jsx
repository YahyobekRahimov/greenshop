import { useLocation } from "react-router-dom";
import React from "react";
import Images from "../images/plant1.png";
import data from "/data/data.json";
import { useState } from "react";
import LikeIcon from "../components/LikeIcon";
import PlantImage from "/src/images/plant13.png";
import Container from "../components/Container";
import { Button } from "@mui/material";
import AddToCart from "../components/AddToCart";

export default function ProductDetails() {
   const location = useLocation();
   const id = location.pathname.trim().slice(6);
   const index = data.findIndex((product) => product.id == id);
   const ProductData = data[index];
   const [activeSize, setActiveSize] = useState(0);
   const [counter, setCounter] = useState(1);
   function decrement() {
      if (counter == 1) {
         return;
      }
      setCounter(counter - 1);
   }
   function increment() {
      setCounter(counter + 1);
   }

   // * getting the products added to cart from localStorage
   let productsInCart =
      JSON.parse(localStorage.getItem("productsInCart")) || [];

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

   // * getting the liked products from local storage
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

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

   return (
      <Container>
         <div className="flex mt-12">
            <div className="w-[10%]">
               <img className="w-[6.25rem]" src={PlantImage} alt="" />
               <img className="w-[6.25rem]" src={PlantImage} alt="" />
               <img className="w-[6.25rem]" src={PlantImage} alt="" />
               <img className="w-[6.25rem]" src={PlantImage} alt="" />
            </div>
            <div className="w-[40%]">
               <img
                  className="text-center w-[25.25rem]"
                  src={PlantImage}
                  alt=""
               />
            </div>
            <div className="w-[50%]">
               <h2 className="font-bold mb-[1rem] text-[1.75rem]">
                  {ProductData.name}
               </h2>
               <h3 className="text-[1.375rem] text-primary mb-[0.625rem]">
                  ${ProductData.price}
               </h3>
               <div className="mb-[1rem] w-[100%] h-[0.3px] bg-gray-300"></div>
               <h3 className="font-bold text-[1rem] mb-[0.625rem]">
                  Short Description:
               </h3>
               <p className="text-gray-600 mb-[1.5rem]">
                  {ProductData.description} The ceramic cylinder
                  planters come with a wooden stand to help elevate
                  your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate
                  your plants off the ground.
               </p>
               <h3>Size:</h3>
               <div className="flex gap-5 pt-3 pb-6">
                  {ProductData.sizes.map((size, index) => {
                     return (
                        <div
                           key={index}
                           onClick={() => setActiveSize(index)}
                           className={`rounded-full w-[1.75rem] h-[1.75rem] flex items-center justify-center border-2 border-solid cursor-pointer ${
                              index == activeSize
                                 ? "text-primary border-primary font-black"
                                 : "text-textSecondary border-textSecondary"
                           }`}
                        >
                           {size}
                        </div>
                     );
                  })}
               </div>
               <div className="flex gap-5 mb-[1.5rem] items-center">
                  <button
                     className={`text-[1.7rem] flex items-center justify-center text-white px-[0.7rem] bg-primary rounded-full
                ${
                   counter == 1
                      ? "cursor-not-allowed opacity-55"
                      : "cursor-pointer"
                }
             `}
                     onClick={decrement}
                  >
                     -
                  </button>
                  <h1 className="text-xl w-[0.5rem] flex justify-center items-center">
                     {counter}
                  </h1>
                  <button
                     className="text-[1.7rem] flex items-center justify-center text-white px-[0.7rem] bg-primary rounded-full"
                     onClick={increment}
                  >
                     +
                  </button>
                  <Button
                     size="large"
                     variant="contained"
                     className="px-[2rem] py-[0.625rem] border-2 border-solid border-green-700 rounded-md text-green-700 hover:bg-primary hover:text-white"
                     sx={{
                        textTransform: "capitalize",
                        padding: "0.5rem 1rem",
                        fontSize: "1.2rem",
                        fontFamily: "Cera Pro",
                     }}
                  >
                     Buy Now
                  </Button>
                  <AddToCart
                     product={ProductData}
                     state={isAddedToCart(ProductData)}
                  />
                  <LikeIcon
                     className="cursor-pointer"
                     product={ProductData}
                     state={returnState(ProductData)}
                  />
               </div>
               <h2 className=" text-gray-600 mb-[0.625rem]">
                  Category:{" "}
                  <span className="text-black">
                     {ProductData.categories}
                  </span>
               </h2>
               <h2 className=" text-gray-600 ">
                  Tags:{" "}
                  <span className="text-black">
                     {ProductData.tags[0]}, {ProductData.tags[1]},{" "}
                     {ProductData.tags[2]}
                  </span>
               </h2>
            </div>
         </div>
      </Container>
   );
}
