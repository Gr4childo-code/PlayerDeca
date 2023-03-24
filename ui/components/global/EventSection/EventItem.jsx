import React, { useState } from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export const EventItem = ({ id, index, attributes }) => {
  const { title, place, date, time, author, poster } = attributes;
  const allMonths = {
    0: 'Января',
    1: 'Февраля',
    2: 'Марта',
    3: 'Апреля',
    4: 'Мая',
    5: 'Июня',
    6: 'Июля',
    7: 'Августа',
    8: 'Сентября',
    9: 'Ноября',
    10: 'Декабря',
  };
  console.log(poster.data.attributes.name); //путь до кратинки

  const eventDate = new Date(date);
  const eventMonth = allMonths[eventDate.getMonth()];
  const eventYear = eventDate.getFullYear();
  const eventDay = eventDate.getDate();

  return (
    <div className={styles.wrapper} key={id} index={index}>
      <div className={styles.eventInfo}>
        <ul className={styles.eventInfo__texts}>
          <li className={styles.dataEvent__number}>{eventDay}</li>
          <li className={styles.dataEvent__month}>{eventMonth}</li>
          <li className={styles.dataEvent__year}>{eventYear}</li>
          <li className={styles.dataEvent__time}>{time.slice(0, 5)}</li>
        </ul>
        <Link href='/events'>
          <img
            src={process.env.NEXT_PUBLIC_API_URL + attributes?.poster}
            alt='done'
          />
          <ul className={styles.eventInfo__texts}>
            <li className={styles.eventInfo__title}>{title}</li>
            <li className={styles.eventInfo__place}>{place}</li>
            <li className={styles.eventInfo__author}>{author}</li>
          </ul>
        </Link>
      </div>
      <div className={styles.eventInfo__links}>
        <button>
          <a href='http://'> Купить билет </a>
        </button>
      </div>
    </div>
  );
};
/* title,place,date,time,author, poster */
