import React from 'react';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export const EventItem = ({ id, index, attributes }) => {
  return (
    <div className={styles.wrapper} key={id}>
      <div className={styles.eventInfo}>
        {index}
        <ul className={styles.eventInfo_texts}>
          <li className={styles.dataEvent_number}></li>
          <li className={styles.dataEvent_month}></li>
          <li className={styles.dataEvent_year}></li>
          <li className={styles.dataEvent_time}>{attributes.time}</li>
        </ul>
        <a href='http:/'>
          <img
            src={process.env.NEXT_PUBLIC_API_URL + attributes?.posterPath}
            alt='done'
          />
        </a>
        <ul className={styles.eventInfo_texts}>
          <li className={styles.eventInfo_title}>{attributes.title}</li>
          <li className={styles.eventInfo_descr}></li>
          <li className={styles.eventInfo_author}>{attributes.author}</li>
        </ul>
      </div>
      <div className={styles.eventInfo_links}>
        <button>
          <a href='http://'> Купить билет </a>
        </button>
      </div>
    </div>
  );
};
/* title,place,date,time,author, poster */
