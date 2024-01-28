import UserIcon from "/src/images/user2.svg?react";
import AddressIcon from "/src/images/Location.svg?react";
import CartIcon from "/src/images/shoppingC.svg?react";
import HeartIcon from "/src/images/heart.svg?react";
import ReportsIcon from "/src/images/reports.svg?react";
import DownloadIcon from "/src/images/Download.svg?react";
import SupportIcon from "/src/images/support.svg?react";
import LogoutIcon from "/src/images/mylogout.svg?react";
import { Button } from "@mui/material";
import { useState } from "react";

const Tabs = [
   {
      title: "Account Details",
      icon: <UserIcon className="w-[1.2rem] fill-textSecondary" />,
      extraWrapperClasses: "",
      useStroke: false,
      useFill: true,
   },
   {
      title: "Address",
      icon: <AddressIcon className="w-[1.2rem] fill-textSecondary" />,
      extraWrapperClasses: "",
      useStroke: false,
      useFill: true,
   },
   {
      title: "Orders",
      icon: <CartIcon className="w-[1.2rem]" />,
      extraWrapperClasses: "shoppingCartIconContainer",
      useStroke: false,
      useFill: true,
   },
   {
      title: "Wishlist",
      icon: (
         <HeartIcon className="w-[1.2rem] fill-textSecondary stroke-textSecondary stroke-[.5]" />
      ),
      extraWrapperClasses: "",
      useStroke: true,
      useFill: true,
   },
   {
      title: "Reports",
      icon: (
         <ReportsIcon className="w-[1.2rem] stroke-textSecondary" />
      ),
      extraWrapperClasses: "",
      useStroke: true,
      useFill: false,
   },
   {
      title: "Downloads",
      icon: (
         <DownloadIcon className="w-[1.2rem] stroke-textSecondary" />
      ),
      extraWrapperClasses: "",
      useStroke: true,
      useFill: false,
   },
   {
      title: "Support",
      icon: (
         <SupportIcon className="w-[1.2rem] stroke-textSecondary" />
      ),
      extraWrapperClasses: "",
      useStroke: true,
      useFill: false,
   },
];
export default function MyAccount() {
   const [selectedTab, setSelectedTab] = useState(0);
   return (
      <div className="w-[19.375rem] bg-softBackground rounded-lg py-[17px]">
         <h2 className="pl-6 mb-6 text-lg font-bold">My Account</h2>
         {Tabs.map((tab, index) => (
            <div
               className={`flex gap-3 cursor-pointer items-center py-[0.6rem] pl-4 text-textSecondary text-[0.938rem] border-l-[0.3125rem] border-transparent ${
                  tab.extraWrapperClasses
               } ${
                  selectedTab == index
                     ? `bg-white border-l-primary ${
                          tab.useStroke && "svg-green-use-stroke"
                       }  ${tab.useFill && "svg-green-use-fill"} ${
                          tab.useStroke &&
                          tab.useFill &&
                          "svg-green-use-both"
                       }`
                     : ""
               }`}
               onClick={() => setSelectedTab(index)}
               key={index}
            >
               {tab.icon}
               <p
                  className={`${
                     selectedTab == index ? "text-primary" : ""
                  }`}
               >
                  {tab.title}
               </p>
            </div>
         ))}

         <div className="border-t">
            <Button
               style={{
                  color: "#46A358",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  fontSize: "0.934rem",
                  marginTop: "10px",
                  display: "flex",
                  gap: "0.5rem",
               }}
            >
               <LogoutIcon className="w-[1.2rem] stroke-textSecondary" />
               Loguot
            </Button>
         </div>
      </div>
   );
}
