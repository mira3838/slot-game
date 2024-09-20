import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "@/components/Slot.module.css";
import Image from "next/image";

export function Slot(props) {
  return (
    <Swiper
      direction="vertical"
      onSlideChange={(swiper) => props.onSlideChange(swiper, props.index)}
      onSwiper={(swiper) => props.onSwiperInit(swiper)}
      modules={[Autoplay]}
      speed={1000}
      autoplay={{
        delay: 0,
        reverseDirection: true,
      }}
      loop={true}
      allowTouchMove={false}
      className={`slides ${styles.swiperContainer}`}
    >
      {props.data.map((d, i) => (
        <SwiperSlide key={i}>
          <Image src={d} width={120} height={120} priority={true} alt="slot" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
