import { useDispatch } from "react-redux";
import Container from "../../components/Container";
import LikeIcon from "../../components/LikeIcon";
import data from "/data/data.json";
import { Divider } from "@mui/material";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import Plant5 from "/src/images/plant5.png";
import { useNavigate } from "react-router-dom";

export default function Products() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   let products = data.slice(38);
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));
   function handleCardClick(product, PlantImage) {
      let PRODUCT = { ...product, image: PlantImage };
      navigate(`/shop/${PRODUCT.id}`, { state: { key: PRODUCT } });
   }
   function returnState(product) {
      if (!(likedProducts.length > 1)) {
         return false;
      }
      try {
         for (let i = 0; i < likedProducts.length; i++) {
            let element = likedProducts[i];
            if ((element = null)) {
               continue;
            }
            if (product.id === element.id) {
               return true;
            }
         }
      } catch (error) {
         console.log(error);
      }
      return false;
   }
   return (
      <Container>
         <h2 className="text-[2rem] text-center">Products</h2>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
            {products.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg bg-softBackground hover:scale-105 duration-200"
                  onClick={() => handleCardClick(product, Plant5)}
               >
                  <img
                     className="w-[14rem] h-[14rem] object-cover mb-3 border-2 border-solid rounded-lg bg-white"
                     src={Plant5}
                     alt={product.name}
                  />
                  <h3 className="text-[1.2rem] h-14">
                     {product.name}
                  </h3>
                  <h4 className="font-bold text-primary text-[1.25rem]">
                     ${product.price}
                  </h4>
                  <div className="flex justify-around">
                     <LikeIcon
                        product={product}
                        state={returnState(product)}
                     />
                  </div>
               </div>
            ))}
         </div>
      </Container>
   );
}
