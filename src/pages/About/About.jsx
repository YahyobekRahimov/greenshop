import Container from "../../components/Container";
import Image1 from "/src/images/about-us/about-us-image.jpg";
import Image2 from "/src/images/about-us/about-us-image2.jpg";

export default function About() {
   return (
      <>
         <section>
            <Container>
               <h1 className="text-4xl text-center mb-5 mt-14 text-primary">
                  Welcome to Greenshop!
               </h1>
               <p className="text-center text-xl w-[80%] mx-auto">
                  At GreenPlants, we are thrilled to extend a warm
                  welcome to you in our vibrant online marketplace for
                  plants, gardening essentials, and green living. As a
                  proud member of Brij Multiservices ApS, we stand out
                  as the go-to online destination for all your
                  plant-related needs in Copenhagen, Denmark.
                  Experience the joy of bringing nature into your home
                  with our diverse range of plants and gardening
                  products, coupled with hassle-free delivery
                  services.
               </p>
            </Container>
         </section>
         <section>
            <Container classes="my-[10rem]">
               <div className="flex justify-between items-center gap-[5rem]">
                  <div className="w-[60%]">
                     <h2 className="text-3xl text-primary mb-10">
                        Our commitment to quality
                     </h2>
                     <p className="text-xl">
                        At GreenPlants.dk, we take pride in sourcing
                        the finest plant varieties from around the
                        world. Each plant undergoes rigorous testing
                        and approval by certified horticultural
                        experts to ensure you receive nothing but the
                        best. With our roots in agriculture, we select
                        plants with careful consideration of
                        environmental factors, ensuring they thrive in
                        your space.
                     </p>
                  </div>
                  <div className="">
                     <img
                        className="max-w-[30rem] rounded-lg object-cover"
                        src={Image1}
                        alt=""
                     />
                     <span></span>
                  </div>
               </div>
               <div className="mt-[10rem] items-center flex justify-between flex-row-reverse gap-[5rem]">
                  <div className="w-[60%]">
                     <h2 className="text-3xl text-primary mb-10">
                        One-Stop Shop for Green Enthusiasts
                     </h2>
                     <p className="text-xl">
                        Discover a botanical haven at GreenPlants.dk,
                        your pocket-friendly online plant emporium.
                        Browse through our extensive collection,
                        including indoor and outdoor plants, gardening
                        tools, soil, and more. From vibrant flowers to
                        air-purifying greenery, we've got your green
                        thumb covered. Conveniently order online
                        through our user-friendly web shop and have
                        your favorite plants delivered to your
                        doorstep with precision logistics.
                     </p>
                  </div>
                  <div className="">
                     <img
                        className="max-w-[30rem] rounded-lg object-cover"
                        src={Image2}
                        alt=""
                     />
                     <span></span>
                  </div>
               </div>
               <div className="mt-24">
                  <h3 className="text-2xl text-primary font-bold">
                     Business Customers:
                  </h3>
                  <p className="text-xl w-[40%]">
                     For our business clients, we offer personalized
                     services. Reach out to us via
                     <span className="text-blue-400">
                        {" "}
                        WhatsApp at +45 71453099{" "}
                     </span>
                     or drop us an email at info@greenplants.dk. You
                     can also contact us on our mobile at{" "}
                     <a
                        className="text-blue-400"
                        href="tel:+4591733407"
                     >
                        +45 91733407
                     </a>
                     .
                  </p>
               </div>
            </Container>
         </section>
      </>
   );
}
