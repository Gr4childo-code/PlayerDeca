import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, link, filter }) {
  const { title, place, author, poster } = data.data[1].attributes;
  const slideImage = poster.data.attributes.url;

  return (
    <>
      <Link href={`${link}`}>
        <img
          className={styles.wrapper__slides}
          src={process.env.NEXT_PUBLIC_API_URL + slideImage}
          alt={'slide'}
        />
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
          <li className={styles.wrapper__item}>{title || author || 'none'}</li>
          <li className={styles.wrapper__item}>{place || author || 'none'}</li>
        </ul>
      </>
    </>
  );
}
