import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, link, filter }) {
  /* console.log(data.data); */

  const slideAtributes = data.data.map(({ attributes }) => attributes);
  /*   console.log(allAtributes[0]);
   */
  const slideImage = slideAtributes[0].poster.data.attributes.url;

  const slideInfo = slideAtributes.map(({ title, place, poster, author }) => (
    <div>
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
          <li className={styles.wrapper__item}>{title || author || 'none'} </li>
          <li className={styles.wrapper__item}>{place || author || 'none'}</li>
        </ul>
      </>
    </div>
  ));

  return <>{slideInfo}</>;
}
