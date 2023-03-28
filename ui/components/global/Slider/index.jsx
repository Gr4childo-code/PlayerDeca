import React from 'react';
import { useState } from 'react';
import Buttons from './Buttons';
import Pagination from './Pagination';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function Slider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(activeSlide === 0 ? activeSlide : activeSlide - 1);
  };
  const handleNextSlide = () => {
    setActiveSlide(activeSlide === children.length - 1 ? 0 : activeSlide + 1);
  };

  const currentLink = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__slides} /* id={slide?.id} */></div>
      <div className={styles.slide}>{children[activeSlide]}</div>
      <Buttons prev={handlePrevSlide} next={handleNextSlide} />
      <Pagination
        currentDataSlide={children.length}
        activeSlide={activeSlide}
        currentLink={currentLink}
      />
    </div>
  );
}
/* <img
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
          }} /> */
