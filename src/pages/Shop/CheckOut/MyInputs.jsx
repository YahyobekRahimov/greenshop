import { Button, MenuItem, Select } from "@mui/material";
import { React, useState } from "react";

import Image from "/src/images/Img.svg?react";

const MyInputs = ({
   label = "",
   type = "text",
   name = "",
   required,
   showSelect,
   placeholder = "",
   options,
   text,
   className,
   ...otherProps
}) => {
   const [selectedValue, setSelectedValue] = useState(options);

   const handleChange = (event) => {
      setSelectedValue(event.target.value);
   };

   if (showSelect) {
      const optionsArray = options
         .split(",")
         .map((option) => option.trim());

      return (
         <div className="mb-4 w-full mr-6">
            <label
               htmlFor={name}
               className="block text-gray-700 font-bold mb-2"
            >
               {label}{" "}
               {required && <span className="text-red-700">*</span>}
            </label>
            <Select
               value={selectedValue}
               size="small"
               className="w-full "
               name={name}
               required={required}
               onChange={handleChange}
               {...otherProps}
            >
               {optionsArray.map((option) => (
                  <MenuItem key={option} value={option}>
                     {option}
                  </MenuItem>
               ))}
            </Select>
         </div>
      );
   }

   if (text) {
      return (
         <div className="w-max">
            <label
               htmlFor={name}
               className="block text-gray-700 font-bold mb-2"
            >
               {label}{" "}
               {required && <span className="text-red-600">*</span>}
            </label>
            <div className="flex gap-5">
               <div className="p-[5px] bg-[#FBFBFB] border border-[#EAEAEA] rounded-3xl">
                  <Image />
               </div>
               <Button variant="contained">Change</Button>
               <Button>Remove</Button>
            </div>
         </div>
      );
   }

   return (
      <div className="w-full">
         <label
            htmlFor={name}
            className="block text-gray-700 font-bold mb-2"
         >
            {label}{" "}
            {required && <span className="text-red-600">*</span>}
         </label>
         <input
            id={name}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            className={`border border-gray-300 p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200 rounded-md ${
               required && !otherProps.value ? "" : ""
            }`}
            {...otherProps}
         />
      </div>
   );
};

export default MyInputs;
