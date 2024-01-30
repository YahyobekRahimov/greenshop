import React from "react";
import MyInputs from "../../Shop/CheckOut/MyInputs";
import { FormControl } from "@mui/material";
import Button from "../../../components/Button";
import { useRef } from "react";

export default function Address() {
   const nameRef = useRef();
   function clickButton() {
      console.log(nameRef.current.value);
   }
   return (
      <div>
         <div>
            <h1>Billing Address</h1>
            <p className="text-gray-500 mt-2 mb-7">
               The following addresses will be used on the checkout
               page by default.
            </p>
         </div>
         <FormControl>
            <div className="w-[46.875rem] flex flex-wrap items-center">
               <MyInputs
                 
                  label="First Name"
                  placeholder=""
                  name="firstName"
                  required={true}
               />
               <MyInputs
                  label="Last Name"
                  placeholder=""
                  name="lastName"
                  required={true}
               />
               <MyInputs
                  label="Country / Region"
                  placeholder="Select a country / region"
                  name="country"
                  required={true}
               />
               <MyInputs
                  label="Town / City"
                  required={true}
                  name="city"
               />
               <MyInputs
                  label="Street Address"
                  placeholder="House number and street name"
                  required={true}
                  name="street"
               />
               <MyInputs
                  name="optional"
                  label="Optional"
                  placeholder="Appartment, suite, unit, etc. (optional)"
               />
               <MyInputs
                  name="state"
                  label="State"
                  required={true}
                  placeholder="Select a state"
               />
               <MyInputs
                  name="phone"
                  label="Phone Number"
                  required={true}
                  type="number"
                  placeholder=""
               />
            </div>
            <Button
               onClick={clickButton}
               classes=" hover:bg-primaryDark rounded w-[10rem] px-[1rem] py-[0.5rem] text-white bg-primary"
            >
               Send
            </Button>
         </FormControl>
      </div>
   );
}