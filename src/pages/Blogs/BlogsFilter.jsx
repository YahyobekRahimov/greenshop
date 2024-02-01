import { NavLink } from "react-router-dom";
import CategoriesData from "/data/blogs/blogCategories.json";
import MyInputs from "../Shop/CheckOut/MyInputs";
import SearchIcon from "/src/images/search.svg?react";
import { FormControl, IconButton } from "@mui/material";

export default function BlogsFilter() {
   let acceptableCharacters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "-",
      " ",
   ];
   function handleSubmit(e) {
      e.preventDefault();
      console.log("Submitted once");
   }
   return (
      <div className="bg-[#FBFBFB] p-10 sticky top-0 h-max">
         <div className="">
            <h2 className="text-2xl text-textPrimary mb-10 mt-5">
               Categories
            </h2>
            <ul className="flex flex-col gap-2">
               {CategoriesData.map((category, index) => {
                  let link = category
                     .toLowerCase()
                     .split("")
                     .filter((char) =>
                        acceptableCharacters.includes(char)
                     )
                     .join("")
                     .split(" ")
                     .join("-");
                  return (
                     <li
                        key={index}
                        className="text-xl w-max cursor-pointer hover:text-primary duration-200"
                     >
                        {index}.
                        <NavLink to={link}>{" " + category}</NavLink>
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className="border-dashed border border-textSecondary p-5 w-max flex flex-col mt-5">
            <h3 className="text-xl">Search</h3>
            <form onSubmit={handleSubmit}>
               <div className="relative w-max">
                  <MyInputs
                     type="text"
                     placeholder="Search for a planet"
                     className="w-min m-0 absolute right-0 top-0"
                  />

                  <div className="w-[2.5rem] h-[2.5rem] flex justify-center items-center absolute right-1 top-[50%] translate-y-[-45%]">
                     <IconButton type="submit">
                        <SearchIcon />
                     </IconButton>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}
