import { Button } from "@mui/material";
import IconRight from "/src/images/arrow-right-1.svg?react";
import { useState } from "react";

export default function ArticleCards({
   title,
   content,
   id,
   date,
   category,
   author,
}) {
   const [moveRight, setMoveRight] = useState(false);
   return (
      <div className="p-10">
         <img src={`https://picsum.photos/300/200?random=${id}`} />
         <h3 className="text-2xl my-5">{title}</h3>
         <p className="pb-5">{content.slice(0, 500)}...</p>
         <ul className="flex items-center gap-10 pb-5">
            <li>
               By <i>{author}</i>
            </li>
            <li>{date}</li>
         </ul>
         <Button
            variant="text"
            sx={{ fontWeight: "600", fontFamily: "Cera Pro" }}
            onMouseOver={() => setMoveRight(true)}
            onMouseOut={() => setMoveRight(false)}
         >
            <span className="mr-1">Read more</span>
            <IconRight
               className={`h-5 *:fill-primary duration-300 ease-in-out ${
                  moveRight ? "ml-4" : ""
               }`}
            />
         </Button>
      </div>
   );
}
