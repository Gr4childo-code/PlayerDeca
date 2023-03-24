import React from 'react';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export const EventItem = ({ id, index, attributes }) => {
  const { title, place, date, time, author, poster } = attributes;
  console.log(attributes);
  console.log(poster.data.attributes.name);

  return (
    <div className={styles.wrapper} key={id} index={index}>
      <div className={styles.eventInfo}>
        <ul className={styles.eventInfo__texts}>
          <li className={styles.dataEvent__number}></li>
          <li className={styles.dataEvent__month}>{date}</li>
          <li className={styles.dataEvent__year}></li>
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
