import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

export default function SliderItem({ data, title }) {
  /* const router = useRouter(); */

  console.log(data);

  return (
    <div className={styles.slide}>
      <Link href={'/'}>{title}</Link>
    </div>
  );
}
