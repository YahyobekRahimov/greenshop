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
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";
import Linkedin from "../images/Linkedin.svg";
import Union from "../images/Union.svg";
import AcceptedPayments from "../images/AcceptedPayments.png";

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
                  <p className="text-[0.875rem] py-1 text-textSecondary">
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
                  <p className="text-[0.875rem] py-1 text-textSecondary">
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
                  <p className="text-[0.875rem] py-1 text-textSecondary">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
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
         <Divider variant="fullWidth" />
         <div className="pl-7 pr-[14rem] grid grid-cols-4 py-6 items-center bg-footerBackgroundSecondary">
            <Logo />
            <div className="flex gap-2 items-center">
               <div>
                  <img
                     className="w-8"
                     src={Location}
                     alt="location"
                  />
               </div>
               70 West Buckingham Ave. Farmingdale, NY 11735
            </div>
            <div className="flex gap-4">
               <div>
                  <img className="w-5" src={Message} alt="Message" />
               </div>
               contact@greenshop.com
            </div>
            <div className="flex gap-4">
               <div>
                  <img className="w-5" src={Calling} alt="Call" />
               </div>
               +88 01911 717 490
            </div>
         </div>
         <Divider variant="fullWidth" />
         <div className="grid footer-grid-custom">
            <div className="flex flex-col gap-2 my-8">
               <h3 className="text-textPrimary font-bold text-[1.25rem]">
                  My Account
               </h3>
               <ul className="list-none">
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/my-account">My Account</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/stores">Our stores</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/contact">Contact us</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/career">Career</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/Specials">Specials</NavLink>
                  </li>
               </ul>
            </div>
            <div className="flex flex-col gap-2 my-8">
               <h3 className="text-textPrimary font-bold text-[1.25rem]">
                  Help & Guide
               </h3>
               <ul className="list-none">
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/my-account">Help Center</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/stores">How to Buy</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/contact">
                        Shipping & Delivery
                     </NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/career">Product Policy</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/Specials">How to Return</NavLink>
                  </li>
               </ul>
            </div>
            <div className="flex flex-col gap-2 my-8">
               <h3 className="text-textPrimary font-bold text-[1.25rem]">
                  Categories
               </h3>
               <ul className="list-none">
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/my-account">House Plants</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/stores">Potter plants</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/contact">Seeds</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/career">Small Plants</NavLink>
                  </li>
                  <li className="text-[0.875rem] py-1 hover:underline">
                     <NavLink to="/Specials">Accessories</NavLink>
                  </li>
               </ul>
            </div>
            <div className="flex flex-col gap-2 my-8">
               <h3 className="text-textPrimary font-bold text-[1.25rem]">
                  Social Media
               </h3>
               <div className="grid grid-cols-5 w-max gap-3">
                  <a
                     className="border-2 border-solid rounded border-socialMediaBorder p-[0.4rem] w-8 h-8"
                     href="https://facebook.com/ourPage"
                  >
                     <img
                        className="w-full h-full"
                        src={Facebook}
                        alt="Facebook"
                     />
                  </a>
                  <a
                     className="border-2 border-solid rounded border-socialMediaBorder p-[0.4rem] w-8 h-8"
                     href="https://facebook.com/ourPage"
                  >
                     <img
                        className="w-full h-full"
                        src={Instagram}
                        alt="Facebook"
                     />
                  </a>
                  <a
                     className="border-2 border-solid rounded border-socialMediaBorder p-[0.4rem] w-8 h-8"
                     href="https://facebook.com/ourPage"
                  >
                     <img
                        className="w-full h-full"
                        src={Twitter}
                        alt="Facebook"
                     />
                  </a>
                  <a
                     className="border-2 border-solid rounded border-socialMediaBorder p-[0.4rem] w-8 h-8"
                     href="https://facebook.com/ourPage"
                  >
                     <img
                        className="w-full h-full"
                        src={Linkedin}
                        alt="Facebook"
                     />
                  </a>
                  <a
                     className="border-2 border-solid rounded border-socialMediaBorder p-[0.4rem] w-8 h-8"
                     href="https://facebook.com/ourPage"
                  >
                     <img
                        className="w-full h-full"
                        src={Union}
                        alt="Facebook"
                     />
                  </a>
               </div>
               <div>
                  <h3 className="text-textPrimary font-bold text-[1.25rem] mt-8">
                     We accept
                  </h3>
                  <img src={AcceptedPayments} alt="Payment methods" />
               </div>
            </div>
         </div>
         <Divider variant="fullWidth" />
         <p className="text-textPrimary text-[0.875rem] flex items-center justify-center py-2">
            © 2021 GreenShop. All Rights Reserved.
         </p>
      </Container>
   );
}
