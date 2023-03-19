import React from 'react';

import styles from '../Statistics/Statistics.module.scss';

export default function Statistics() {
  return (
    <>
      <h3 className={styles.title}>Statistics</h3>
      <ul className={styles.userStat__list}>
        <li className={styles.userStat__item}>
          <p className={styles.userStat__title}>Liked</p>
          <span>33</span>
        </li>
        <li className={styles.userStat__item}>
          <p className={styles.userStat__title}>Listened</p>
          <span>476 ч</span>
        </li>
        <li className={styles.userStat__item}>
          <p className={styles.userStat__title}>Playlists</p>
          <span>8</span>
        </li>
      </ul>
    </>
  );
}
