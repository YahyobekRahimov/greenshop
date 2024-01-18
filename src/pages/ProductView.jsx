import { useLocation } from "react-router-dom";
import React from "react";
import Images from "../images/plant1.png";
import data from "/data/data.json";
import { useState } from "react";
import LikeIcon from "../components/LikeIcon";
import PlantImage from "/src/images/plant13.png";
import Container from "../components/Container";

export default function ProductDetails() {
   const location = useLocation();
   const id = location.pathname.trim().slice(6);
   const index = data.findIndex((product) => product.id == id);
   const ProductData = data[index];
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
               <h1 className="text-[1.25rem] font-bold mb-[1rem]">
                  {ProductData.name}
               </h1>
               <h3 className="text-[1.375rem] text-primary mb-[0.625rem]">
                  ${ProductData.price}
               </h3>
               <div className="mb-[1rem] w-[100%] h-[0.3px] bg-gray-300"></div>
               <h2 className="font-medium text-[1rem] mb-[0.625rem]">
                  Short Description:
               </h2>
               <p className="text-gray-600 mb-[1.5rem]">
                  {ProductData.description} The ceramic cylinder
                  planters come with a wooden stand to help elevate
                  your plants off the ground. The ceramic cylinder
                  planters come with a wooden stand to help elevate
                  your plants off the ground.
               </p>
               <div className="flex gap-5 mb-[1.5rem] items-center">
                  <button
                     className={`text-xs text-white px-[0.7rem] py-3 bg-primary rounded-full
                ${
                   counter == 1
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                }
             `}
                     onClick={decrement}
                  >
                     -
                  </button>
                  <h1 className="text-xl">{counter}</h1>
                  <button
                     className="text-xs text-white px-[0.7rem] py-3 bg-primary rounded-full"
                     onClick={increment}
                  >
                     +
                  </button>
                  <button className="px-[2rem] py-[0.625rem] border-2 border-solid border-green-700 rounded-md text-green-700 hover:bg-primary hover:text-white">
                     By Now
                  </button>
                  <button className=" px-[1.25rem] py-[0.625rem] border-2 border-solid border-green-700 rounded-md text-green-700 hover:bg-primary hover:text-white">
                     Add to Card
                  </button>
                  <LikeIcon />
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
