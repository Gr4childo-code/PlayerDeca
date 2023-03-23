import React from 'react';

import styles from '@/ui/components/global/Slider/Pagination/Pagination.module.scss';

export default function Pagination({
  currentDataSlide,
  currentSlide,
  currentLink,
}) {
  return (
    <>
      <div className={styles.links}>
        {currentDataSlide &&
          [...new Array(currentDataSlide.length)].map((e, index) => (
            <div
              onMouseEnter={() => currentLink(index)}
              className={`${styles.links__points} ${
                index === currentSlide ? styles.links__active : ''
              }`}
              key={index}></div>
          ))}
      </div>
    </>
  );
}
