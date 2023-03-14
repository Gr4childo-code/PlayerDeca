import React, { use, useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

const musicData = [
  {
    id: 1,
    author: 'author1',
    song: 'song1',
  },
  {
    id: 2,
    author: 'author2',
    song: 'song2',
  },
  {
    id: 3,
    author: 'author3',
    song: 'song3',
  },
  {
    id: 4,
    author: 'author4',
    song: 'song4',
  },
];

export default function Cards() {
  const [cardsData, setCardsData] = useState(musicData);
  const [currentSlide, setCurrentSlide] = useState(0);

  const card = cardsData[currentSlide];

  console.log(card);
  console.log(currentSlide);

  const leftArrowClick = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };
  const rightArrowClick = () => {
    setCurrentSlide(currentSlide >= 3 ? currentSlide - 3 : currentSlide + 1);
  };

  return (
    <div>
      <h2>Новинки DLESS</h2>
      <div className={styles.wrapper}>
        <div className={styles.button}>
          <button className={styles.button_left} onClick={leftArrowClick}>
            prev
          </button>
          <button className={styles.button_right} onClick={rightArrowClick}>
            next
          </button>
        </div>
        <div className={styles.header}>
          <h3>{card.id} Card</h3>
        </div>
        <div>
          <ul key={card.id} className={styles.wrapper_list}>
            <li className={styles.wrapper_item}>{card.song}</li>
            <li className={styles.wrapper_item}>{card.author}</li>
          </ul>
        </div>
        <div className={styles.links}>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
          <a href=''></a>
        </div>
      </div>
    </div>
  );
}
