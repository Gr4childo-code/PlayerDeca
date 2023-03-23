import React from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SlideDescription({ filter, slide }) {
  return (
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
  );
}
