import Container from "../../components/Container";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import HeroImg from "/src/images/hero-image.png";
import Button from "/src/components/Button";

export default function Hero() {
   return (
      <Container classes={`mt-3 mb-10`}>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none">
               <div>
                  <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
                     Welcome to Greenshop
                  </h3>
                  <h1 className="uppercase font-black text-[4.375rem] text-textPrimary">
                     Let's make a better{" "}
                     <span className="text-primary">planet</span>
                  </h1>
                  <p className="text-textSecondary text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants. Use our plants to
                     create an unique Urban Jungle. Order your
                     favorite plants!
                  </p>
                  <Button classes="uppercase bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                     shop now
                  </Button>
               </div>
               <img src={HeroImg} alt="bunch of plants" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none ">
               <div>
                  <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
                     Welcome to Greenshop
                  </h3>
                  <h1 className="uppercase font-black 0 text-textPrimary">
                     Let's make a better{" "}
                     <span className="text-primary">planet</span>
                  </h1>
                  <p className="text-textSecondary text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants. Use our plants to
                     create an unique Urban Jungle. Order your
                     favorite plants!
                  </p>
                  <Button classes="uppercase bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                     shop now
                  </Button>
               </div>
               <img src={HeroImg} alt="bunch of plants" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center px-16 bg-primaryGradient select-none">
               <div>
                  <h3 className="uppercase text-[0.875rem] text-textPrimary font-medium">
                     Welcome to Greenshop
                  </h3>
                  <h1 className="uppercase font-black 0 text-textPrimary">
                     Let's make a better{" "}
                     <span className="text-primary">planet</span>
                  </h1>
                  <p className="text-textSecondary text-[0.875rem]">
                     We are an online plant shop offering a wide range
                     of cheap and trendy plants. Use our plants to
                     create an unique Urban Jungle. Order your
                     favorite plants!
                  </p>
                  <Button classes="uppercase bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                     shop now
                  </Button>
               </div>
               <img src={HeroImg} alt="bunch of plants" />
            </SwiperSlide>
         </Swiper>
      </Container>
   );
}
