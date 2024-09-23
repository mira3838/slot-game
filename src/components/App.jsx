import { useCallback, useState } from "react";
import styles from "@/components/App.module.css";
import { Slot } from "./Slot";
import Link from "next/link";

const ITEMS = [
  [
    "/images/oku-a1.png",
    "/images/oku-b1.png",
    "/images/zawa-a1.png",
    "/images/zawa-b1.png",
    "/images/sio1.png",
    "/images/miha1.png",
  ],
  [
    "/images/oku-a2.png",
    "/images/oku-b2.png",
    "/images/zawa-a2.png",
    "/images/zawa-b2.png",
    "/images/sio2.png",
    "/images/miha2.png",
  ],
  [
    "/images/oku-a3.png",
    "/images/oku-b3.png",
    "/images/zawa-a3.png",
    "/images/zawa-b3.png",
    "/images/sio3.png",
    "/images/miha3.png",
  ],
];

export function App() {
  const [array, setArray] = useState(ITEMS.map(() => true));
  const [text, setText] = useState("");
  const [slideIndex, setSlideIndex] = useState([ITEMS.map(() => -1)]);
  const [swiperInstances, setSwiperInstances] = useState([]);

  const slotPlay = useCallback(() => {
    const index = array.indexOf(true);
    if (index !== -1) {
      setArray((prevArray) => {
        const newArray = [...prevArray];
        newArray[index] = false;
        return newArray;
      });
      swiperInstances[index].autoplay.stop();
      if (index === ITEMS.length - 1) {
        const result = ITEMS.every((item, i) => {
          return item[slideIndex[i]] === ITEMS[0][slideIndex[0]];
        });
        setText(() => {
          if (!result) {
            return "失敗！";
          }
          return "クリア！";
        });
      }
    } else {
      setText("");
      setArray((prevArray) => {
        const newArray = [...prevArray];
        return newArray.fill(true);
      });
      swiperInstances.forEach((swiper) => {
        swiper.autoplay.start();
      });
    }
  }, [swiperInstances, array, slideIndex]);

  const addSwiperInstance = (swiper) => {
    setSwiperInstances((prev) => [...prev, swiper]);
  };

  const handleSlideChange = (swiper, index) => {
    setSlideIndex((prev) => {
      const newIndex = [...prev];
      newIndex[index] = swiper.realIndex;
      return newIndex;
    });
  };

  return (
    <main>
      {/* <h1 className={styles.h1}>{text}</h1> */}
      <div className={styles.slotContainer}>
        {ITEMS.map((item, i) => {
          return (
            <Slot
              key={i}
              index={i}
              reverse={i % 2 === 0}
              data={item}
              speed={400 - i * 50}
              onSwiperInit={addSwiperInstance}
              onSlideChange={handleSlideChange}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={slotPlay} className={styles.button}>
          クリック
        </button>
        <Link href="/">
          <span>もどる</span>
        </Link>
      </div>
    </main>
  );
}
