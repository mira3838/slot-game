import { Slides } from "@/components/Slides";
import { useCallback, useState } from "react";

const ITEMS = [
  ["hoge", "huga", "piyo"],
  ["foo", "bar"],
  ["test", "exam", "problem", "confirm"],
];

export function Main() {
  const [array, setArray] = useState(ITEMS.map(() => true));
  const [swiperInstances, setSwiperInstances] = useState([]);

  const stopAutoplay = useCallback(() => {
    swiperInstances.forEach((swiper) => {
      try {
        swiper.autoplay.stop();
      } catch (error) {
        console.log(error.message);
      }
    });
  }, [swiperInstances]);
  const startAutoplay = useCallback(() => {
    swiperInstances.forEach((swiper) => {
      try {
        swiper.autoplay.start();
      } catch (error) {
        console.log(error.message);
      }
    });
  }, [swiperInstances]);

  const addSwiperInstance = (swiper) => {
    setSwiperInstances((prev) => [...prev, swiper]);
  };

  const handleAutoplay = useCallback(() => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      if (array.includes(true)) {
        const index = newArray.indexOf(true);
        newArray[index] = false;
        return newArray;
      }
      return newArray.fill(true);
    });
  }, [array]);

  return (
    <div>
      {ITEMS.map((item, i) => {
        return (
          <Slides
            key={i}
            data={item}
            onSwiperInit={addSwiperInstance}
          />
        );
      })}
      <button onClick={stopAutoplay}>停止</button>
      <button onClick={startAutoplay}>開始</button>
    </div>
  );
}
