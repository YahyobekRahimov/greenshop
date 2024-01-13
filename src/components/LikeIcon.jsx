import { useState } from "react";
import Icon from "/src/images/likeIcon.svg?react";

export default function LikeIcon({ onClick, className }) {
   const [liked, setLiked] = useState(false);
   return (
      <div
         onClick={() => setLiked(!liked)}
         className={`w-max p-3 rounded-lg border-2 border-solid ${
            liked ? "border-red-500" : "border-slate-400"
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
