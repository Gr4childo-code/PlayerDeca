import React from 'react';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function Uploaded({ files, upload, handleAddSongPlaylist }) {
  return (
    <div className={styles.wrapper__right}>
      <p className={styles.title}>Готовы к загрузке</p>
      <ul className={styles.list}>
        {files.map(({ name, author }, index) => (
          <li key={index} className={styles.item}>
            {index + 1}. {author} - {name}
            <div className={styles.buttons}>
              <button
                className={styles.buttons__add}
                onClick={() => handleAddSongPlaylist(index)}
              >
                +
              </button>
              <button
                className={styles.buttons__upload}
                onClick={() => upload(index)}
              >
                Загрузить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
