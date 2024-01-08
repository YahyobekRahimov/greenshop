import Container from "./Container";
import Plant from "../images/plant.png";
import Cactus from "../images/cactus.png";
import Teapot from "../images/teapot.png";

export default function Footer() {
   return (
      <Container classes="flex bg-slate-100">
         <div className="flex">
            <div>
               <img src={Plant} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Garden Care
               </h3>
               <p className="text-[0.875rem]">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
            <div>
               <img src={Cactus} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Garden Care
               </h3>
               <p className="text-[0.875rem]">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
            <div>
               <img src={Teapot} alt="plant" />
               <h3 className="text-[1.125rem] font-bold">
                  Garden Care
               </h3>
               <p className="text-[0.875rem]">
                  We are an online plant shop offering a wide range of
                  cheap and trendy plants.
               </p>
            </div>
         </div>
         <div></div>
         <div></div>
      </Container>
   );
}
