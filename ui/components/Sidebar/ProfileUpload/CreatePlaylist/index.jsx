import React from 'react';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function CreatePlaylist({ playlist, uploadPlaylist }) {
  return (
    <div>
      <p className={styles.title}>Создать плейлист</p>
      <ul className={styles.list}>
        <button
          className={styles.playlists__button}
          onClick={() => uploadPlaylist()}
        >
          Загрузить
        </button>
        {playlist.map(({ name, author }, index) => (
          <li key={index} className={styles.item}>
            {index + 1}. {author} - {name}
          </li>
        ))}
      </ul>
    </div>
  );
}