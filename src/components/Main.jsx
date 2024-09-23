import { Slides } from "@/components/Slides";
import { useCallback, useState } from "react";
import styles from "@/components/Main.module.css";
import Link from "next/link";

const ITEMS = [
  ["HAPPY", "WORST", "SUPER", "WASTE of"],
  ["BIRTHDAY", "NEW YEAR", "LIFE", "TUESDAY"],
  ["dear", "GOD of", "死ね", "さよなら"],
  ["おっくん", "ざわ", "しおみん", "みはちゃん"],
];

export function Main() {
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
    } else {
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
      <div className={styles.slotContainer}>
        {ITEMS.map((item, i) => {
          return (
            <Slides
              key={i}
              index={i}
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
        {/* <Link href="/slot">
          <span>おまけ</span>
        </Link> */}
      </div>
    </main>
  );
}
