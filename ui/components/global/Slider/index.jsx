import { useState } from 'react';
import Buttons from './Buttons';
import Pagination from './Pagination';
import SlideDescription from './SlideDescription';
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

      {/* Если есть данные - будет описание слайда (Песня, Автор и тд) */}
      {data && <SlideDescription filter={filter} slide={slide} />}

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
