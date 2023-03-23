import { useState } from 'react';
import Buttons from './Buttons';
import Pagination from './Pagination';
import Image from 'next/image';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({ title, data, pagination, filter, buttons }) {
  const [currentDataSlide] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = currentDataSlide[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const currentLink = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <div className={styles.header}>
        <Image
          width={946}
          height={500}
          src={slide.img}
          className={styles.header__img}
          alt={`image ${currentSlide}`}></Image>
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
      {/*  Кнопки и пагинация */}
      {buttons && <Buttons prev={handlePrevSlide} next={handleNextSlide} />}
      {pagination && (
        <Pagination
          currentDataSlide={currentDataSlide}
          currentSlide={currentSlide}
          currentLink={currentLink}
        />
      )}
    </div>
  );
}
