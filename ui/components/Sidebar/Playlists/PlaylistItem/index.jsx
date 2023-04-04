import React from 'react';
import styles from './PlaylistItem.module.scss';

export default function PlaylistItem({ id, attributes, index }) {
  const { title, createdAt, updatedAt } = attributes;

  return (
    <div className={styles.playlists__list}>
      <div>
        <ul>
          PlaylistItem {id}
          <li>Название плейлиста: {title}</li>
          <li>Дата создания: {createdAt.slice(0, 10)}</li>
          <li>Плейлист обновлён: {updatedAt.slice(0, 10)}</li>
        </ul>
      </div>
    </div>
  );
}

/* title: 'Плейлист админа 2', date: '2023-03-29', createdAt: '2023-04-03T14:01:04.528Z', updatedAt: '2023-04-03T14:03:31.252Z', publishedAt: '2023-04-03T14:01:26.197Z' */
