import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "@/components/Slides.module.css";

export function Slides(props) {
  return (
    <Swiper
      direction="vertical"
      onSlideChange={(swiper) => props.onSlideChange(swiper, props.index)}
      onSwiper={(swiper) => props.onSwiperInit(swiper)}
      modules={[Autoplay]}
      speed={props.speed}
      autoplay={{
        delay: 0,
        reverseDirection: true,
      }}
      loop={true}
      allowTouchMove={false}
      className={`slides ${styles.swiperContainer}`}
    >
      {props.data.map((d) => (
        <SwiperSlide key={d}>
          <div className={styles.slideWrapper}>
            <div className={styles.slide}>{d}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
