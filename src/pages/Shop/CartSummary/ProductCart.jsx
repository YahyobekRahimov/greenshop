import Container from "../../../components/Container";
import Product from "./ProductCartItems";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import {
  addAllProductsToCart,
  removeFromCart,
} from "../../../redux/cartProductsSlice";
import TableHead from "./TableHead";
import SimilarProducts from "./SimilarProducts";

export default function ProductCart() {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("productsInCart")) || [];
  // dispatch(addAllProductsToCart(data));
  const items = useSelector((state) => state.cartProducts);
  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
    const data = JSON.parse(localStorage.getItem("productsInCart")) || [];
    const index = data[data.findIndex((prod) => prod.id == productId)];
    data.splice(index, 1);
    localStorage.setItem("productsInCart", JSON.stringify(data));
  };

  return (
    <Container>
      <div className="mt-16 flex justify-between gap-16 mb-20">
        <div className="text-left  w-[48.75rem]">
          <table className="w-full">
            <TableHead />
            <tbody className="bg-green-600 mb-3">
              {items &&
                items.map((item) => (
                  <Product
                    key={item.id}
                    product={item}
                    quantity={item.quantity}
                    onDelete={() => handleDelete(item.id)}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white w-[20.625rem]">
          <CartTotal />
        </div>
      </div>
      <SimilarProducts />
    </Container>
  );
}
