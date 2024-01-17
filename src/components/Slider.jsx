import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Dispatch } from "@reduxjs/toolkit";
import { addPriceRange } from "../redux/filterSlice";

function valuetext(value) {
   return `${value}`;
}

export default function RangeSlider() {
   const [value, setValue] = React.useState([0, 1000]);
   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div>
         <Box sx={{ width: 300 }}>
            <Slider
               getAriaLabel={() => "Price range"}
               value={value}
               onChange={handleChange}
               valueLabelDisplay="auto"
               getAriaValueText={valuetext}
               min={0}
               max={1000}
               sx={{
                  color: "green",
                  "& .MuiSlider-thumb": {
                     "&:hover, &.Mui-focusVisible": {
                        boxShadow:
                           "0px 0px 0px 8px rgba(0, 128, 0, 0.16)",
                     },
                  },
                  "& .MuiSlider-track": {
                     backgroundColor: "green",
                  },
                  "& .MuiSlider-rail": {
                     backgroundColor: "green",
                  },
               }}
            />
         </Box>
         <div className="flex ">
            <h1 className="mt-2 text-xl">
               Price:{" "}
               <span className="text-green-700 ">
                  ${value[0]} - ${value[1]}
               </span>
            </h1>
         </div>
      </div>
   );
}
