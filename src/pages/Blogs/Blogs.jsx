import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import BlogsArticles from "./BlogsArticles";
import BlogsFilter from "./BlogsFilter";

export default function Blogs() {
   const location = useLocation();
   return (
      <Container classes="flex">
         <BlogsFilter />
         <BlogsArticles />
      </Container>
   );
}
