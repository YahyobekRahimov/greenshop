import React, { useState } from "react";
import Slider from "../../components/Slider";
import {
   InputLabel,
   Select,
   MenuItem,
   FormControl,
} from "@mui/material";
import Button from "/src/components/Button";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/filterSlice";
import Categories from "/data/categories.json";

export default function Category({ handleFilter }) {
   const [category, setCategory] = useState("all");
   const dispatch = useDispatch();

   function handleChange(e) {
      setCategory(e.target.value);
      dispatch(addCategory(e.target.value));
   }

   return (
      <div className="flex gap-[2rem] items-center justify-between">
         <FormControl fullWidth>
            <InputLabel id="plant-category">Categories</InputLabel>
            <Select
               labelId="plant-category"
               id="plant-category"
               value={category}
               label="category"
               onChange={handleChange}
               className="w-[12rem]"
               size="small"
               sx={{
                  borderRadius: "0.8rem",
                  minHeight: "2rem",
                  "& .MuiSelect-select": {
                     minHeight: "2rem",
                     display: "flex",
                     alignItems: "center",
                  },
               }}
            >
               {Categories.map((category, index) => (
                  <MenuItem key={index} value={category.value}>
                     {category.label}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <Slider></Slider>
         <Button
            onClick={handleFilter}
            classes="hover:bg-primaryDark py-[0.6rem] px-[2rem] text-[1.25rem] rounded bg-primary text-white h-max w-max ml-[5rem]"
         >
            Filter
         </Button>
      </div>
   );
}
