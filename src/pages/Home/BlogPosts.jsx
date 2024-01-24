import Container from "../../components/Container";
import data from "../../../data/blog.posts.json";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = () => {
   return (
      <Container classes="pt-[8.5rem]">
         <h2 className="text-center font-bold text-[2rem] text-textPrimary mb-2">
            Our Blog Posts
         </h2>
         <p className="text-center mb-9">
            We are an online plant shop offering a wide range of cheap
            and trendy plants.
         </p>

         <div className="flex gap-10 mb-24">
            {data &&
               data.map((product) => (
                  <BlogPostCard key={product.id} product={product} />
               ))}
         </div>
      </Container>
   );
};

export default BlogPosts;
