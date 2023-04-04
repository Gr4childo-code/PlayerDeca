import React from 'react';
import styles from './PlaylistItem.module.scss';

export default function PlaylistItem({ id, attributes, index }) {
  const { title, createdAt, updatedAt } = attributes;

  return (
    <div className={styles.playlists__list}>
      <ul key={id} className={styles.playlists__item}>
        <li className={styles.playlists__descr}>{title || 'Без названия'}</li>
        <li className={styles.playlists__descr}>
          Дата создания: {createdAt.slice(0, 10)}
        </li>
        {/*           <li className={styles.playlists__descr}>
            Плейлист обновлён: {updatedAt.slice(0, 10)}
          </li> */}
      </ul>
    </div>
  );
}

/* title: 'Плейлист админа 2', date: '2023-03-29', createdAt: '2023-04-03T14:01:04.528Z', updatedAt: '2023-04-03T14:03:31.252Z', publishedAt: '2023-04-03T14:01:26.197Z' */
