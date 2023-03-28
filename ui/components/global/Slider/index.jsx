import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';
import Pagination from './Pagination';
import SlideDescription from './SlideDescription';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({ children }, filter, description) {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideLength = children.length;

  const slide = activeSlide;

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? activeSlide : children.length - 1);
  };
  const handleNextSlide = () => {
    setActiveSlide(activeSlide === children.length - 1 ? 0 : activeSlide + 1);
  };

  const currentLink = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__slides} /* id={slide?.id} */>
        <img
          width={946}
          height={500}
          src={
            process.env.NEXT_PUBLIC_API_URL +
            slide?.attributes?.poster?.data?.attributes?.url
          }
          className={styles.header__img}
          alt={`image ${activeSlide}`}
          /* onClick={() => {
            router.push(`/playlist/${slide.id}`);
          }} */
        />
      </div>
      <div className={styles.slide}>{children[activeSlide]}</div>
      <SlideDescription filter={filter} description={description} />
      <Buttons prev={handlePrevSlide} next={handleNextSlide} />
      <Pagination
        currentDataSlide={slideLength}
        activeSlide={activeSlide}
        currentLink={currentLink}
      />
    </div>
  );
}
