import { useDispatch } from "react-redux";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import { addAllProductsToCart } from "../../redux/cartProductsSlice";

export default function integrateLocalWithRedux() {
   const dispatch = useDispatch();
   // * getting the liked products from local storage
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));

   // * getting the products added to cart from localStorage
   let productsInCart =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
   dispatch(addAllProductsToCart(productsInCart));
}
