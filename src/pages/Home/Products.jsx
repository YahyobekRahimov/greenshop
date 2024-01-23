import { useDispatch } from "react-redux";
import Container from "../../components/Container";
import LikeIcon from "../../components/LikeIcon";
import data from "/data/data.json";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import Plant5 from "/src/images/plant5.png";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import { addAllProductsToCart } from "../../redux/cartProductsSlice";

export default function Products() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   let products = data.slice(38);

   // * getting the liked products from local storage
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));

   // * getting the products added to cart from localStorage
   let productsInCart =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
   dispatch(addAllProductsToCart(productsInCart));

   // * redirecting the user to product details page.
   function handleCardClick(product, PlantImage) {
      let PRODUCT = { ...product, image: PlantImage };
      navigate(`/shop/${PRODUCT.id}`, { state: { key: PRODUCT } });
   }

   // * returns whether the product given to it is liked or not
   function returnState(product) {
      if (!(likedProducts.length > 1)) {
         return false;
      }
      try {
         for (let i = 0; i < likedProducts.length; i++) {
            let element = likedProducts[i];
            if (element == null) {
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

   // * returns whether the product added to cart or not
   function isAddedToCart(product) {
      if (!productsInCart.length) {
         return false;
      }

      try {
         for (let i = 0; i < productsInCart.length; i++) {
            const element = productsInCart[i];
            if (!element) {
               continue;
            }
            if (element.id == product.id) {
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
                  className="cursor-pointer shadow-md hover:shadow-xl w-[17rem] px-6 py-6 rounded-lg bg-softBackground hover:scale-105 duration-200"
                  onClick={() => handleCardClick(product, Plant5)}
               >
                  <img
                     className="select-none w-[14rem] h-[14rem] object-cover mb-3 border-2 border-solid rounded-lg bg-white"
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
                     <AddToCart
                        product={product}
                        state={isAddedToCart(product)}
                     />
                  </div>
               </div>
            ))}
         </div>
      </Container>
   );
}
