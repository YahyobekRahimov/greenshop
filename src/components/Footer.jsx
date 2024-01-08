import Container from "./Container";
import Plant from "../images/plant.png";
import Cactus from "../images/cactus.png";
import Teapot from "../images/teapot.png";
import Button from "./Button";

export default function Footer() {
   return (
      <Container classes="flex bg-softBackground">
         <div className="flex py-8">
            {/* Cards */}
            <div className="flex w-[65%]">
               <div>
                  <img src={Plant} alt="plant" />
                  <h3 className="text-[1.125rem] font-bold">
                     Garden Care
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
               <div>
                  <img src={Cactus} alt="plant" />
                  <h3 className="text-[1.125rem] font-bold">
                     Plant Renovation
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
               <div>
                  <img src={Teapot} alt="plant" />
                  <h3 className="text-[1.125rem] font-bold">
                     Watering Garden
                  </h3>
                  <p className="text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants.
                  </p>
               </div>
            </div>
            <div className="w-[30%]">
               <h3 className="text-[1.125rem] font-bold">
                  Would you like to join newsletters?
               </h3>
               <div className="flex">
                  <input
                     type="email"
                     name="email"
                     id="email"
                     className="w-full p-3 text-[0.875rem] duration-200 border-gray-300 shadow-input focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:border-r-0 rounded-l-lg"
                     placeholder="Enter your email address"
                  />
                  <Button classes="bg-primary text-white py-3 px-6 rounded-r-lg hover:bg-primaryDark">
                     Join
                  </Button>
               </div>
            </div>
         </div>
         <div></div>
         <div></div>
      </Container>
   );
}
