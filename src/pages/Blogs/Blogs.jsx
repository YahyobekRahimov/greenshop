import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import BlogsArticles from "./BlogsArticles";
import BlogsFilter from "./BlogsFilter";

export default function Blogs() {
   const location = useLocation();
   if (location.pathname == "/blogs") {
      console.log("I am in the blogs");
   } else {
      console.log("I am in the one of the categories");
   }
   return (
      <Container classes="flex">
         <BlogsFilter />
         <BlogsArticles />
      </Container>
   );
}
