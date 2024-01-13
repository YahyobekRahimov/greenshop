import { Divider } from "@mui/material";
import Plant from "/src/images/plant.png";
import Cactus from "/src/images/cactus.png";
import Teapot from "/src/images/teapot.png";
import Button from "../Button";

export default function FooterCards() {
   return (
      <div className="flex py-8 gap-[4rem] px-7">
         {/* Cards */}
         <div className="flex w-[60%] gap-7">
            <div className="flex flex-col gap-4">
               <img className="w-[5.5rem]" src={Plant} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Garden Care
               </h3>
               <p className="text-[0.875rem] py-1 text-textSecondary">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
            <Divider variant="middle" orientation="vertical" />
            <div className="flex flex-col gap-4">
               <img className="w-[6rem]" src={Cactus} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Plant Renovation
               </h3>
               <p className="text-[0.875rem] py-1 text-textSecondary">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
            <Divider variant="middle" orientation="vertical" />
            <div className="flex flex-col gap-4">
               <img className="w-[6.2rem]" src={Teapot} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Watering Garden
               </h3>
               <p className="text-[0.875rem] py-1 text-textSecondary">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
         </div>
         <div className="w-[30%]">
            <h3 className="text-[1.125rem] font-bold pt-4 pb-4">
               Would you like to join newsletters?
            </h3>
            <div className="flex">
               <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-3 text-[0.875rem] py-1 duration-200 border-gray-300 shadow-input focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:border-r-0 rounded-l-lg"
                  placeholder="Enter your email address"
               />
               <Button classes="bg-primary text-white py-3 px-6 rounded-r-lg hover:bg-primaryDark">
                  Join
               </Button>
            </div>
            <p className="text-textSecondary text-[0.865rem] pt-4">
               We usually post offers and challenges in newsletter.
               We’re your online houseplant destination. We offer a
               wide range of houseplants and accessories shipped
               directly from our (green)house to yours!
            </p>
         </div>
      </div>
   );
}
