import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "@/components/Slides.module.css";

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

export function Slides(props) {
  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay]}
      //style={{ height: "200px", width: "300px" }}
      speed={200}
      autoplay={{
        delay: 0,
        reverseDirection: true,
      }}
      loop={true}
      allowTouchMove={false}
      className={`slides ${styles.slides}`}
    >
      {props.data.map((d) => (
        <SwiperSlide key={d}>
          <div style={{ background: "grey", height: "100%" }}>{d}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
