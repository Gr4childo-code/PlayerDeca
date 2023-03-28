import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import SlideDescription from '../SlideDescription';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({
  title,
  data,
  pagination,
  filter,
  buttons,
}) {
  const [currentDataSlide] = useState(data);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const slide = currentDataSlide[currentSlide];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const currentLink = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header} id={slide?.id}>
        <img
          width={946}
          height={500}
          src={
            process.env.NEXT_PUBLIC_API_URL +
            slide?.attributes?.poster?.data?.attributes?.url
          }
          className={styles.header__img}
          alt={`image ${currentSlide}`}
          onClick={() => {
            router.push(`/playlist/${slide.id}`);
          }}
        />
      </div>
    </div>
  );
}
