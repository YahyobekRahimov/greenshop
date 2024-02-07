import React from "react";
import MyInputs from "../../Shop/CheckOut/MyInputs";
import {
   FormControl,
   InputLabel,
   MenuItem,
   Select,
} from "@mui/material";
import { Button } from "@mui/material";
import { useRef } from "react";
import countries from "/data/countries.json";

export default function Address() {
   const nameRef = useRef();
   const countryRef = useRef();
   function clickButton() {
      console.log(nameRef.current.value);
   }
   return (
      <div className="w-full">
         <div>
            <h1>Billing Address</h1>
            <p className="text-gray-500 mt-2 mb-7">
               The following addresses will be used on the checkout
               page by default.
            </p>
         </div>
         <FormControl fullWidth>
            <div className="grid grid-cols-2 w-full items-center gap-x-5 gap-y-3 mb-10">
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
               <FormControl fullWidth>
                  <label
                     htmlFor="country-region"
                     className="mb-2 after:content-['*'] after:text-red-500 after:ml-1"
                  >
                     Country / region
                  </label>
                  <Select
                     labelId="country-region"
                     inputRef={countryRef}
                     size="small"
                  >
                     {countries.map((country, index) => (
                        <MenuItem
                           key={index}
                           value={country.toLowerCase()}
                        >
                           {country}
                        </MenuItem>
                     ))}
                  </Select>
               </FormControl>
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
               variant="contained"
               className="w-max"
               sx={{ paddingLeft: "3rem", paddingRight: "3rem" }}
            >
               Send
            </Button>
         </FormControl>
      </div>
   );
}
