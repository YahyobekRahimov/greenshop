import {
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from "@mui/material";
import Container from "/src/components/Container";
import Plant5 from "/src/images/plant16.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAllLikedProducts } from "../../../redux/likedProductsSlice";
import { addAllProductsToCart } from "../../../redux/cartProductsSlice";
import LikeIcon from "../../../components/LikeIcon";
import AddToCart from "../../../components/AddToCart";

export default function Wishlist() {
   const navigate = useNavigate();
   const dispatch = useDispatch();

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
         <h2 className="text-[2rem] text-center">Wishlist</h2>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
            {likedProducts &&
               likedProducts.map((product) => {
                  if (!product) {
                     return;
                  }
                  return (
                     <Card
                        key={product.id}
                        sx={{
                           maxWidth: "16rem",
                           maxHeight: "30rem",
                        }}
                     >
                        <CardActionArea
                           onClick={() =>
                              handleCardClick(product, Plant5)
                           }
                        >
                           <CardMedia
                              component="img"
                              alt="green iguana"
                              image={Plant5}
                              sx={{
                                 backgroundColor: "#FBFBFB",
                              }}
                           />
                           <CardContent>
                              <div className="min-h-[6rem] flex flex-col justify-between">
                                 <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    fontSize="1.3rem"
                                    sx={{
                                       textOverflow: "ellipsis",
                                    }}
                                    fontFamily="Cera Pro"
                                 >
                                    {product.name}
                                 </Typography>
                                 <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    className="text-primary"
                                    fontWeight={600}
                                 >
                                    ${product.price}
                                 </Typography>
                              </div>
                           </CardContent>
                        </CardActionArea>
                        <CardActions
                           sx={{
                              display: "flex",
                              justifyContent: "center",
                           }}
                        >
                           <LikeIcon
                              className="cursor-pointer"
                              product={product}
                              state={returnState(product)}
                           />
                           <AddToCart
                              product={product}
                              state={isAddedToCart(product)}
                           />
                        </CardActions>
                     </Card>
                  );
               })}
         </div>
      </Container>
   );
}
