// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      className="sample-slider"
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 0 }}
      slidesPerView={3} // 追記
      speed={3000} // 追記
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
    </Swiper>
  );
};
