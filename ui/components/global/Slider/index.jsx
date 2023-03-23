import { useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({ images }) {
  const [currentImage] = useState(images);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = currentImage[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <span onClick={handlePrevSlide} className={styles.button__left}></span>
        <span onClick={handleNextSlide} className={styles.button__right}></span>
      </div>
      <div className={styles.header}>
        <img
          src={slide}
          className={styles.header__img}
          alt={`image ${currentSlide}`}></img>
      </div>
      <>
        <ul key={currentSlide} className={styles.wrapper__list}>
          <li className={styles.wrapper__item}>Song</li>
          <li className={styles.wrapper__item}>Author</li>
        </ul>
      </>
      <div className={styles.links}>
        {currentImage &&
          [...new Array(currentImage.length)].map((e, index) => (
            <div
              onMouseEnter={() => currLink(index)}
              className={`${styles.links__points} ${
                index === currentSlide ? styles.links__active : ''
              }`}
              key={index}></div>
          ))}
      </div>
    </div>
  );
}
