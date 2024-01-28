import { NavLink } from "react-router-dom";
import CategoriesData from "/data/blogs/blogCategories.json";

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
   return (
      <div className="bg-[#FBFBFB] p-10 sticky top-0 h-max">
         <div className="">
            <h2 className="text-2xl text-textPrimary mb-10 mt-5">
               Categories
            </h2>
            <ul className="list-decimal flex flex-col gap-2">
               {CategoriesData.map((category) => {
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
                     <li className="text-xl w-max cursor-pointer">
                        <NavLink to={link}>{category}</NavLink>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}
