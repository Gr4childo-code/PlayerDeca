import { useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className={styles.wrapper}>
      <img src={images[currentSlide]} alt={`image ${currentSlide}`} />
      <div className={styles.button}>
        <span onClick={handlePrevSlide} className={styles.button__left}></span>
        <span onClick={handleNextSlide} className={styles.button__right}></span>
      </div>
    </div>
  );
}
