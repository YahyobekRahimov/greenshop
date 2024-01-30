import data from "../../../../data/blog.posts.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Products from "./Products";

const SimilarProducts = () => {
  return (
    <div className="mb-24">
      <h1 className="text-primary text-lg border-b-[0.019rem] mb-10 pb-2">
        You may be interested in
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data &&
          data.map((product) => (
            <SwiperSlide key={product.id}>
              <Products product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SimilarProducts;
