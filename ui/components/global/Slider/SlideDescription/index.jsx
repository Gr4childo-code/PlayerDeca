import React from 'react';

import styles from '@/ui/components/global/Slider/SlideDescription/SlideDescription.module.scss';

export default function SlideDescription({ filter, slide }) {
  return (
    <>
      <ul
        key={slide.id}
        className={`${
          filter == 'blur'
            ? styles.wrapper__blur
            : styles.wrapper__list && filter == 'gradient'
            ? styles.wrapper__gradient
            : styles.wrapper__list && filter == 'none'
            ? styles.wrapper__none
            : styles.wrapper__list
        }`}>
        <li className={styles.wrapper__item}>{slide.song}</li>
        <li className={styles.wrapper__item}>{slide.author}</li>
      </ul>
    </>
  );
}
