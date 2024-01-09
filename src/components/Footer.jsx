import Container from "./Container";
import Plant from "../images/plant.png";
import Cactus from "../images/cactus.png";
import Teapot from "../images/teapot.png";
import Button from "./Button";
import Divider from "@mui/material/Divider";
import Logo from "../images/logo.svg?react";
import Location from "../images/Location.png";
import Message from "../images/Message.png";
import Calling from "../images/Calling.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
   return (
      <Container classes="flex bg-softBackground flex-col">
         <div className="flex py-8 gap-[4rem] px-7">
            {/* Cards */}
            <div className="flex w-[60%] gap-7">
               <div className="flex flex-col gap-4">
                  <img
                     className="w-[5.5rem]"
                     src={Plant}
                     alt="plant"
                  />
                  <h3 className="text-[1.125rem] font-bold">
                     Garden Care
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
               <Divider variant="middle" orientation="vertical" />
               <div className="flex flex-col gap-4">
                  <img
                     className="w-[6rem]"
                     src={Cactus}
                     alt="plant"
                  />
                  <h3 className="text-[1.125rem] font-bold">
                     Plant Renovation
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
               <Divider variant="middle" orientation="vertical" />
               <div className="flex flex-col gap-4">
                  <img
                     className="w-[6.2rem]"
                     src={Teapot}
                     alt="plant"
                  />
                  <h3 className="text-[1.125rem] font-bold">
                     Watering Garden
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
            </div>
            <div className="w-[30%]">
               <h3 className="text-[1.125rem] font-bold pt-4">
                  Would you like to join newsletters?
               </h3>
               <div className="flex">
                  <input
                     type="email"
                     name="email"
                     id="email"
                     className="w-full p-3 text-[0.875rem] duration-200 border-gray-300 shadow-input focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:border-r-0 rounded-l-lg"
                     placeholder="Enter your email address"
                  />
                  <Button classes="bg-primary text-white py-3 px-6 rounded-r-lg hover:bg-primaryDark">
                     Join
                  </Button>
               </div>
            </div>
         </div>
         <Divider variant="fullWidth" />
         <div className="pl-7 pr-[14rem] grid grid-cols-4 py-6 items-center bg-footerBackgroundSecondary">
            <Logo />
            <p className="flex gap-2 items-center">
               <div>
                  <img
                     className="w-8"
                     src={Location}
                     alt="location"
                  />
               </div>
               70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
            <p className="flex gap-4">
               <div>
                  <img className="w-5" src={Message} alt="Message" />
               </div>
               contact@greenshop.com
            </p>
            <p className="flex gap-4">
               <div>
                  <img className="w-5" src={Calling} alt="Call" />
               </div>
               +88 01911 717 490
            </p>
         </div>
         <Divider variant="fullWidth" />
         <div className="grid footer-grid-custom">
            <div>
               <h3 className="text-textPrimary font-bold text-[1.125rem]">
                  My Account
               </h3>
               <ul className="list-none">
                  <li className="text-[0.875rem] font-thin">
                     <NavLink to="/my-account">My Account</NavLink>
                  </li>
                  <li className="text-[0.875rem] font-thin">
                     <NavLink to="/stores">Our stores</NavLink>
                  </li>
                  <li className="text-[0.875rem] font-thin">
                     <NavLink to="/contact">Contact us</NavLink>
                  </li>
                  <li className="text-[0.875rem] font-thin">
                     <NavLink to="/career">Career</NavLink>
                  </li>
                  <li className="text-[0.875rem] font-thin">
                     <NavLink to="/Specials">Specials</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </Container>
   );
}
