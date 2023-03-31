import React from 'react';
import Image from 'next/image'

import styles from '@/ui/components/global/404/404.module.scss';

function NotFound(props) {
  return (
    <div className={styles.notFound}>
      <Image src='/404.svg' width='600' height="600" />
    </div>
  )
}

export default NotFound;
