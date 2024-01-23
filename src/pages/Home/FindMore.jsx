import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import IconRight from "../../images/iconrigth.svg?react";

export default function FindMore(props) {
   const { image, textTitel, textSubtitel } = props;
   return (
      <div className="flex bg-findBg mt-4 justify-between pl-[18.25rem] pr-9 pt-[2rem] relative">
         <img
            src={image}
            alt=""
            className="absolute left-0 top-[-3rem]"
         />
         <div className="flex flex-col gap-5 items-end">
            <h1 className="text-right text-lg">{textTitel}</h1>
            <p className="text-right text-subtitel text-sm ">
               {textSubtitel}
            </p>
            <Button
               image={<IconRight />}
               classes="flex w-max gap-2 items-center bg-primary rounded-lg hover:bg-primaryDark text-white py-[0.625rem] px-[2rem]"
            >
               Find More{" "}
            </Button>
         </div>
      </div>
   );
}
