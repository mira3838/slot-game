import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "@/components/Slides.module.css";
import { useCallback, useEffect, useState } from "react";

export function Slides(props) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);

  // useEffect(() => {
  //   console.log(props.isAutoplay);
  //   if (swiperInstance) {
  //     if (!props.isAutoplay) {
  //       swiperInstance.autoplay.stop();
  //     } else {
  //       swiperInstance.autoplay.start();
  //     }
  //   }
  // }, [props.isAutoplay, swiperInstance]);

  // const handleAutoplay = useCallback(() => {
  //   if (isAutoplayRunning) {
  //     swiperInstance.autoplay.stop();
  //   } else {
  //     swiperInstance.autoplay.start();
  //   }
  //   setIsAutoplayRunning(!isAutoplayRunning);
  // }, [swiperInstance, isAutoplayRunning]);

  return (
    <div className={styles.slot}>
      <Swiper
        direction="vertical"
        onSwiper={(swiper) => props.onSwiperInit(swiper)}
        modules={[Autoplay]}
        speed={100}
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
      {/* <button onClick={handleAutoplay} className={styles.button}>
        {isAutoplayRunning ? "停止" : "再開"}
      </button> */}
    </div>
  );
}
