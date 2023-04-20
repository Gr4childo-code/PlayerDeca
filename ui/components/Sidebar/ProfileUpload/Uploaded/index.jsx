import React from 'react';

import styles from '@/ui/components/Sidebar/ProfileUpload/Uploaded/Uploaded.module.scss';

export default function Uploaded({ files, uploadNewSongs, handleDeleteSong }) {
  return (
    <div className={styles.uploaded}>
      <p className={styles.uploaded__title}>Готовы к загрузке</p>
      <ul className={styles.uploaded__list}>
        {files.map(({ name, author }, index) => (
          <li key={index} className={styles.uploaded__item}>
            {index + 1}. {author} - {name}
            <div className={styles.buttons}>
              <button
                className={styles.buttons__add}
                onClick={() => handleDeleteSong(index)}
              >
                &mdash;
              </button>
            </div>
          </li>
        ))}
        {files.length >= 2 ? (
          <button
            className={styles.buttons__upload}
            onClick={() => uploadNewSongs(files)}
          >
            Загрузить все песни
          </button>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}
