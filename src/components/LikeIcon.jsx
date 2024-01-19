import { useState } from "react";
import Icon from "/src/images/likeIcon.svg?react";
import { useDispatch, useSelector } from "react-redux";
import {
   addLikedProduct,
   removeLikedProduct,
   addAllLikedProducts,
} from "/src/redux/likedProductsSlice.js";

export default function LikeIcon({
   onClick,
   className,
   product,
   state,
}) {
   const [liked, setLiked] = useState(state);
   const dispatch = useDispatch();
   function handleLiked(e) {
      e.stopPropagation();
      if (!liked) {
         // if the user likes the product
         if (product) {
            dispatch(addLikedProduct(product));
         }
         let data =
            JSON.parse(localStorage.getItem("likedProducts")) || [];
         data.push(product);
         localStorage.setItem("likedProducts", JSON.stringify(data));
      } else if (liked) {
         // if user wants to undo the like
         dispatch(removeLikedProduct(product.id));
         let data =
            JSON.parse(localStorage.getItem("likedProducts")) || [];
         let index = data.findIndex(
            (element) => element.id == product.id
         );
         data.splice(index, 1);
         localStorage.setItem("likedProducts", JSON.stringify(data));
      }
      setLiked(!liked);
   }
   return (
      <div
         onClick={handleLiked}
         className={`w-max h-max px-3 py-2 rounded-lg border-2 border-solid ${
            liked ? "border-red-500 bg-red-50" : "border-slate-400"
         }`}
      >
         <Icon
            className={`w-[1.75rem] ${
               liked
                  ? "text-red-500 fill-red-500"
                  : "text-black fill-none"
            } ${className ? className : ""}`}
         />
      </div>
   );
}
