import Container from "../../components/Container";
import data from "/data/data.json";

export default function Products() {
   let products = data.slice(44);
   return (
      <Container>
         <h2 className="text-[2rem] text-center">Products</h2>
         <div className="grid grid-cols-3 justify-items-center gap-y-16 pt-10 pb-10">
            {products.map((product) => (
               <div
                  key={product.id}
                  className="cursor-pointer shadow-custom w-[17rem] px-6 py-6 rounded-lg"
               >
                  <img src={product.image} alt={product.name} />
                  <h3 className="text-[1.2rem]">{product.name}</h3>
                  <h4 className="font-bold text-primary text-[1.25rem]">
                     {product.price}
                  </h4>
               </div>
            ))}
         </div>
      </Container>
   );
}
