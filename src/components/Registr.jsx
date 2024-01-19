import React from "react";
import Button from "./Button";
export default function Registr() {
   return (
      <div className="flex flex-col items-center">
         <h2 className="text-sm mb-[0.875rem]">
            Enter your email and password to register.
         </h2>
         <input
            className="w-[20rem]  mb-[1rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem]"
            type="text"
            placeholder="User Name"
         />
         <input
            className="w-[20rem]  mb-[1rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem]"
            type="text"
            placeholder="Enter your email address"
         />
         <input
            className="w-[20rem]  mb-[1rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem]"
            type="password"
            placeholder="Password"
         />
         <input
            className="w-[20rem]  mb-[1rem] border-solid border-gray-400 border-2 rounded-md outline-none py-[0.75rem] pl-[0.8rem]"
            type="password"
            placeholder="Confirm Password"
         />
         <Button classes="hover:bg-primaryDark text-white rounded-md bg-primary w-[20rem] py-[0.88rem] ">
            Login
         </Button>
      </div>
   );
}
