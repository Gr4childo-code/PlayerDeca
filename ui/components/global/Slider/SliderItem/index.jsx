import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, title, link, filter, description }) {
  console.log(data?.data);
  const result = data?.data.map(({ id, attributes }) => (
    <div>
      <p>{attributes.title}</p>
    </div>
  ));

  return (
    <>
      <Link href={`${link}`}>
        <div className={styles.slide}>{result}</div>
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
          <li className={styles.wrapper__item}>{title}</li>
          <li className={styles.wrapper__item}>
            {description /* ?.attributes.title */}
          </li>
        </ul>
      </>
    </>
  );
}
