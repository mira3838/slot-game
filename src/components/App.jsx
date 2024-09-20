import { useCallback, useState } from "react";
import styles from "@/components/App.module.css";
import { Slot } from "./Slot";
import Link from "next/link";

const ITEMS = [
  ["/images/aaa.png", "/images/bbb.png"],
  ["/images/aaa.png", "/images/bbb.png"],
  ["/images/aaa.png", "/images/bbb.png"],
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
          <span>birthday</span>
        </Link>
      </div>
    </main>
  );
}
