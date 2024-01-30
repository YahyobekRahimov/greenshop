
import React, { useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg?react";
import HeaderLinks from "./HeaderLinks";
import HeaderButtons from "./HeaderButtons";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function Header() {
   const [modalSearch, setModalSearch] = useState(false);
   const location = useLocation();

   function handleclick() {
      setModalSearch(true);
   }
<<<<<<< HEAD
   
=======
   const path = location.pathname.split("/").slice(1);
   path.unshift("Home");
>>>>>>> 72b9f9eba1e157a7903fae53fcf298b7a50dae44

   function getLink(pageName) {
      switch (pageName) {
         case "home":
            return "/";
         case "shop":
            return "/shop";
         case "cart":
            return "/shop/cart";
         case "plant-care":
            return "/plant-care";
         case "blogs":
            return "/blogs";
         case "checkout":
            return "/shop/checkout";
         default:
            break;
      }
   }
   return (
      <div className="mt-[1.5rem]">
         <Container classes="flex justify-between items-center ">
            <div className="cursor-pointer">
               <NavLink to="/">
                  <Logo />
               </NavLink>
            </div>
            <HeaderLinks location={location} />
            <HeaderButtons
               handleclick={handleclick}
               setModalSearch={setModalSearch}
            />
         </Container>
         <Container>
            <div className="h-[0.3px] w-full bg-green-200 mt-[0.25rem]"></div>
         </Container>
         {location.pathname == "/" ? (
            ""
         ) : (
            <Container classes="py-4">
               <Breadcrumbs aria-label="breadcrumb">
                  {path.map((page, index) => {
                     if (index == path.length - 1) {
                        return (
                           <Typography
                              key={index}
                              sx={{
                                 textTransform: "capitalize",
                              }}
                              color="text.primary"
                           >
                              {page.split("-").join(" ")}
                           </Typography>
                        );
                     } else {
                        return (
                           <Link
                              key={index}
                              to={getLink(page.toLowerCase().trim())}
                              className="capitalize hover:underline"
                           >
                              {page}
                           </Link>
                        );
                     }
                  })}
               </Breadcrumbs>
            </Container>
         )}
      </div>
   );
}
