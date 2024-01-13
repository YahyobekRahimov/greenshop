import Container from "../../components/Container";
import data from "/data/data.json";
import { Divider } from "@mui/material";

export default function Products() {
   let products = data.slice(38);
   return (
      <Container>
         <h2 className="text-[2rem] text-center">Products</h2>
         <div className="grid grid-cols-4 justify-items-center gap-y-16 pt-10 pb-10">
            {products.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg bg-softBackground hover:scale-105 duration-200"
               >
                  <img
                     className="w-[14rem] h-[14rem] object-cover mb-3 border-2 border-solid rounded-lg bg-white"
                     src={product.image}
                     alt={product.name}
                  />
                  <h3 className="text-[1.2rem] h-14">
                     {product.name}
                  </h3>
                  <h4 className="font-bold text-primary text-[1.25rem]">
                     ${product.price}
                  </h4>
               </div>
            ))}
         </div>
      </Container>
   );
}
