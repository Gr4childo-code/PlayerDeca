import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/ui/components/global/Slider/Slider.module.scss';
import { useRouter } from 'next/router';
export default function Cards({ musicData, title, type }) {
  const router = useRouter();
  const [cardsData] = useState(musicData);
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

  if (type == 'news') {
    return (
      <div>
        <div className='title'>{title}</div>
        <div className={styles.wrapper}>
          <div className={styles.button}>
            <span
              className={styles.button_left}
              onClick={leftArrowClick}></span>
            <span
              className={styles.button_right}
              onClick={rightArrowClick}></span>
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
            {cardsData &&
              [...new Array(cardsData.length)].map((e, index) => (
                <div
                  onMouseEnter={() => currLink(index)}
                  className={`${styles.links__points} ${
                    index === currentSlide ? styles.links__active : ''
                  }`}
                  key={index}></div>
              ))}
          </div>
        </div>
      </div>
    );
  } else if (type == 'playlist') {
    return (
      <div>
        <div className='title'>{title}</div>
        <div className={styles.wrapper}>
          <div className={styles.button}>
            <span
              className={styles.button_left}
              onClick={leftArrowClick}></span>
            <span
              className={styles.button_right}
              onClick={rightArrowClick}></span>
          </div>
          <div className={styles.playlist_wrapper}>
            {card.map((item) => (
              <div className={styles.playlist_item}>
                <div className={styles.playlist_item_header}>
                  <Image
                    className={styles.image}
                    src={item.image}
                    width={150}
                    height={150}
                    alt={item.nameplaylist}
                    onClick={() => {
                      router.push(`/playlist/${item.id}`);
                    }}
                  />
                </div>
                <div className={styles.playlist_item_footer}>
                  <div className={styles.subtitle}>
                    <span className={styles.author}>Author: {item.author}</span>
                    <p className={styles.nameplaylist}>
                      Playlist: {item.nameplaylist}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <>
            <ul key={card.id} className={styles.wrapper_list}>
              <li className={styles.wrapper_item}>{card[0].author}</li>
            </ul>
          </>
          <div className={styles.links}>
            {cardsData &&
              [...new Array(cardsData.length)].map((e, index) => (
                <div
                  onMouseEnter={() => currLink(index)}
                  className={`${styles.links__points} ${
                    index === currentSlide ? styles.links__active : ''
                  }`}
                  key={index}></div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
