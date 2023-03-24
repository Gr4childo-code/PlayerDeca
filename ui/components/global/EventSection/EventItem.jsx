import React from 'react';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export const EventItem = ({ id, index, attributes }) => {
  const { title, place, date, time, author, poster } = attributes;
  console.log(attributes);
  console.log(poster.data.attributes.name);

  const arrMonth = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Ноября',
    'Декабря',
  ];

  const myDate = new Date(date);
  const year = myDate.getFullYear();
  /* const month = myDate.getMonth(); */
  const day = myDate.getDate();

  return (
    <div className={styles.wrapper} key={id} index={index}>
      <div className={styles.eventInfo}>
        <ul className={styles.eventInfo__texts}>
          <li className={styles.dataEvent__number}>{day}</li>
          <li className={styles.dataEvent__month}>{arrMonth[2]}</li>
          <li className={styles.dataEvent__year}>{year}</li>
          <li className={styles.dataEvent__time}>{time}</li>
        </ul>
        <a href='http:/'>
          <img
            src={process.env.NEXT_PUBLIC_API_URL + attributes?.poster}
            alt='done'
          />
        </a>
        <ul className={styles.eventInfo__texts}>
          <li className={styles.eventInfo__title}>{title}</li>
          <li className={styles.eventInfo__place}>{place}</li>
          <li className={styles.eventInfo__author}>{author}</li>
        </ul>
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
