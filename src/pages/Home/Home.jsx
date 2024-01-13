import Hero from "./Hero";
import Products from "./Products";
import FindMore from "./FindMore";
import FindMoreImagesOne from "../../images/findMoreSecond.svg";
import FindMoreImagesSecond from "../../images/findMoreOne.svg";
import BlogPosts from "./BlogPosts";

export default function Home() {
   return (
      <main>
         <Hero />
         <Products />
         <div className="flex mb-10 mt-5">
            <FindMore
               image={FindMoreImagesOne}
               textTitel="Summer cactus& succulents"
               textSubtitel="We are an online plant shop offering a wide range of cheap and trendy plants"
            />
            <FindMore
               image={FindMoreImagesSecond}
               textTitel="Summer cactus& succulents"
               textSubtitel="We are an online plant shop offering a wide range of cheap and trendy plants"
            />
         </div>
         <BlogPosts />
      </main>
   );
}
