import Container from "../../components/Container";
import data from "../../../data/blog.posts.json";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = () => {
  return (
    <Container>
      <h1 className="text-center text-2xl mb-2">Our Blog Posts</h1>
      <p className="text-center mb-9">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
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
