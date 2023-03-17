import React, { use, useState } from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Cards({ musicData, title }) {
  const [cardsData, setCardsData] = useState(musicData);
  const [currentSlide, setCurrentSlide] = useState(0);

  const card = cardsData[currentSlide];

  const leftArrowClick = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };
  const rightArrowClick = () => {
    setCurrentSlide(
      currentSlide >= cardsData.length - 1
        ? currentSlide - (cardsData.length - 1)
        : currentSlide + 1
    );
  };
  const currLink = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.button}>
          <span className={styles.button_left} onClick={leftArrowClick}>
            &lt;
          </span>
          <span className={styles.button_right} onClick={rightArrowClick}>
            &gt;
          </span>
        </div>
        <div className={styles.header}>
          <h3>{card.id} Music card</h3>
          <img src={card.img} className={styles.header_img}></img>
        </div>
        <>
          <ul key={card.id} className={styles.wrapper_list}>
            <li className={styles.wrapper_item}>{card.song}</li>
            <li className={styles.wrapper_item}>{card.author}</li>
          </ul>
        </>
        <div className={styles.links}>
          {cardsData && [...new Array(cardsData.length)].map((e, index) => (
            <div onMouseEnter={() => currLink(index)} className={`${styles.links__points} ${index === currentSlide ? styles.links__active : ''}`} key={index}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
