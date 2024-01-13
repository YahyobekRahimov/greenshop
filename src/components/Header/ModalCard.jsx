import React, { useEffect } from "react";

export default function ModalCard({ data }) {
   return (
      <div>
         {data &&
            data.map((e) => {
               return (
                  <div className=" hover:bg-green-50 flex gap-2 mb-2">
                     <div>
                        <img
                           className="cursor-pointer w-[10.325rem]"
                           src={e.image}
                           alt=""
                        />
                     </div>
                     <div className=" flex flex-col gap-2 text-2xl mb-2 ">
                        <h1 className="cursor-pointer">{e.name}</h1>
                        <h2 className="cursor-pointer text-green-700">
                           {e.price} $
                        </h2>
                        <p className="cursor-pointer text-gray-700 text-[1.25rem]">
                           Description: {e.description}
                        </p>
                        <h4 className="cursor-pointer text-[1.20rem]">
                           Categories: {e.categories.join(", ")}
                        </h4>
                     </div>
                  </div>
               );
            })}
      </div>
   );
}
