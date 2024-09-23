import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "@/components/Slot.module.css";
import Image from "next/image";

export function Slot(props) {
  return (
    <Swiper
      onSlideChange={(swiper) => props.onSlideChange(swiper, props.index)}
      onSwiper={(swiper) => props.onSwiperInit(swiper)}
      modules={[Autoplay]}
      speed={props.speed}
      autoplay={{
        delay: 0,
        reverseDirection: props.reverse,
      }}
      loop={true}
      allowTouchMove={false}
      className={`slides ${styles.swiperContainer}`}
    >
      {props.data.map((d, i) => (
        <SwiperSlide key={i}>
          <Image src={d} fill sizes="50vw" priority={true} alt="slot" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
