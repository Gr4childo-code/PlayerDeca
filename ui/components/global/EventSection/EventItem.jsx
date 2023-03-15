import React from 'react';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export const EventItem = ({
  dataEvent,
  dataMonth,
  dataYear,
  dataTime,
  title,
  author,
  img,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.eventInfo}>
        <ul className={styles.eventInfo_texts}>
          <li className={styles.dataEvent_number}>{dataEvent}</li>
          <li className={styles.dataEvent_month}>{dataMonth}</li>
          <li className={styles.dataEvent_year}>{dataYear}</li>
          <li className={styles.dataEvent_time}>{dataTime}</li>
        </ul>
        <a href='http://'>
          <img src={img} alt='done' />
        </a>
        <ul className={styles.eventInfo_texts}>
          <li className={styles.eventInfo_title}>{title}</li>
          <li className={styles.eventInfo_descr}>Location: Google Meet</li>
          <li className={styles.eventInfo_author}>{author}</li>
        </ul>
      </div>
      <div className={styles.eventInfo_links}>
        <button>
          <a href='http://'> Купить пропуск </a>
        </button>
        <li>
          <a href='https://meet.google.com/keu-bybv-mdu'>Ссылка на встречу</a>
        </li>
      </div>
    </div>
  );
};
