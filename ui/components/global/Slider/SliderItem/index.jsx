import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, title, link, filter }) {
  console.log(data?.data);
  const slideTitle = data?.data.map(({ id, attributes }) => (
    <p>{attributes.title}</p>
  ));
  const slidePlace = data?.data.map(({ id, attributes }) => (
    <p>{attributes.place}</p>
  ));

  return (
    <>
      <Link href={`${link}`}>
        <div className={styles.slide}>{title}</div>
      </Link>
      <>
        <ul
          className={`${
            filter == 'blur'
              ? styles.wrapper__blur
              : styles.wrapper__list && filter == 'gradient'
              ? styles.wrapper__gradient
              : styles.wrapper__list && filter == 'none'
              ? styles.wrapper__none
              : styles.wrapper__list
          }`}
        >
          <li className={styles.wrapper__item}>{slideTitle[1]} </li>
          <li className={styles.wrapper__item}>{slidePlace[1]}</li>
        </ul>
      </>
    </>
  );
}
