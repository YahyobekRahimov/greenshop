import React from "react";
import Container from "../../components/Container";
import IconRight from "../../images/iconrigth.svg?react";
import { Button } from "@mui/material";

export default function FindMore(props) {
   const { image, textTitel, textSubtitel } = props;
   return (
      <div className="flex bg-findBg mt-4 justify-between pl-[18.25rem] pr-9 py-[2rem] relative">
         <img
            src={image}
            alt={textTitel}
            className="absolute left-0 bottom-1"
         />
         <div className="flex flex-col gap-5 items-end">
            <h1 className="text-right text-lg">{textTitel}</h1>
            <p className="text-right text-subtitel text-sm ">
               {textSubtitel}
            </p>
            <Button
               image={<IconRight />}
               classes="rounded-lg hover:bg-primaryDark text-white"
               variant="contained"
               sx={{
                  textTransform: "capitalize",
                  display: "flex",
                  gap: "0.2rem",
               }}
            >
               Find More
               <IconRight />
            </Button>
         </div>
      </div>
   );
}
