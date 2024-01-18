import { Link } from "react-router-dom";
import arrow from "../../images/blog-posts/arrow-right.png";
import PlantImage from "/src/images/plant1.png";

const BlogPostCard = ({ product }) => {
   const { id, image, name, description, postedAt } = product;
   return (
      <div className="card w-72 " key={id}>
         <img src={PlantImage} alt={name} />
         <div className="px-1.5 pb-4 bg-softBackground w-64 ">
            <p className="mt-2 mb-1  text-primary">{postedAt}</p>
            <h3 className="mb-1 text-xl text">{name}</h3>
            <p className="text-sm mb-2 text-textSecondary">
               {description}
            </p>
            <Link to="/blogs" className="flex gap-2 cursor-pointer">
               Read More <img src={arrow} alt="Right Arrow" />
            </Link>
         </div>
      </div>
   );
};

export default BlogPostCard;
