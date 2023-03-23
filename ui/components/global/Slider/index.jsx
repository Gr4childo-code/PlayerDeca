import { useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({
  title,
  data,
  pagination,
  filter,
  buttons,
  size,
}) {
  const [currentDataSlide] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = currentDataSlide[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const currLink = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      {buttons && (
        <div className={styles.button}>
          <span
            onClick={handlePrevSlide}
            className={styles.button__left}></span>
          <span
            onClick={handleNextSlide}
            className={styles.button__right}></span>
        </div>
      )}
      <div className={styles.header}>
        <img
          src={slide.img}
          className={styles.header__img}
          alt={`image ${currentSlide}`}></img>
      </div>
      <>
        <ul
          key={slide.id}
          className={`${
            filter == 'blur'
              ? styles.wrapper__blur
              : styles.wrapper__list && filter == 'boxShadow'
              ? styles.wrapper__boxShadow
              : styles.wrapper__list && filter == 'none'
              ? styles.wrapper__none
              : styles.wrapper__list
          }`}>
          <li className={styles.wrapper__item}>{slide.song}</li>
          <li className={styles.wrapper__item}>{slide.author}</li>
        </ul>
      </>
      {pagination && (
        <div className={styles.links}>
          {currentDataSlide &&
            [...new Array(currentDataSlide.length)].map((e, index) => (
              <div
                onMouseEnter={() => currLink(index)}
                className={`${styles.links__points} ${
                  index === currentSlide ? styles.links__active : ''
                }`}
                key={index}></div>
            ))}
        </div>
      )}
    </div>
  );
}
