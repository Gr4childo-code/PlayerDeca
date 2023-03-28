import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, title, link }) {
  console.log(data);

  return (
    <>
      <Link href={`${link}`}>
        <div className={styles.slide}>{title}</div>
      </Link>
    </>
  );
}
