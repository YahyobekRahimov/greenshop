import React, { useRef, useState } from "react";
import Slider from "../../components/Slider";
import {
   InputLabel,
   Select,
   MenuItem,
   FormControl,
} from "@mui/material";
import Button from "/src/components/Button";

export default function Category() {
   const category = useRef("");
   const categories = [
      {
         label: "All",
         value: "",
      },
      {
         label: "Potter-Plants",
         value: "potter-plants",
      },
      {
         label: "Seeds",
         value: "seeds",
      },
      {
         label: "Small Plants",
         value: "small-plants",
      },
   ];
   return (
      <div className="flex gap-[2rem]">
         <FormControl fullWidth>
            <InputLabel id="plant-category">Categories</InputLabel>
            <Select
               labelId="plant-category"
               id="plant-category"
               label="category"
               inputRef={category}
               className="w-[12rem]"
            >
               {categories.map((category, index) => (
                  <MenuItem key={index} value={category.value}>
                     {category.label}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <Slider></Slider>
         <Button classes="hover:bg-primaryDark py-[0.5rem] px-[0.8rem] rounded bg-primary text-white">
            Filter
         </Button>
      </div>
   );
}
