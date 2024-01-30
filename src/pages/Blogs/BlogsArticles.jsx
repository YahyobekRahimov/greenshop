import ArticleCards from "./ArticleCards";
import Blogs from "/data/blogs/blogs.json";

export default function BlogsArticles() {
   return (
      <div>
         {Blogs.map((blog, index) => {
            return (
               <ArticleCards
                  key={index}
                  title={blog.title}
                  id={blog.id}
                  category={blog.category}
                  content={blog.content}
                  date={blog.date}
                  author={blog.author}
               ></ArticleCards>
            );
         })}
      </div>
   );
}
