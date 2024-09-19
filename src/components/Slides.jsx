import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export function Slides() {
  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ height: "200px" }}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {data.map((d) => (
        <SwiperSlide key={d}>
          <div style={{ background: "grey", height: "200px" }}>{d}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
