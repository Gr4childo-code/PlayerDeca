import React, { use, useState } from 'react';

import styles from '../Upload/Dropzone.module.scss';

export default function Dropzone({ uploadFiles }) {
  const [files, setFiles] = useState(uploadFiles);

  return (
    <>
      <h2 className={styles.title}>
        <span>D</span>rag And Drop File Upload
      </h2>
      <div className={styles.wrapper}>
        <input type={'file'} />
      </div>
      <ul className={styles.file__list}>
        {files.map(({ id, author, song }) => {
          return (
            <li key={id} className={styles.file__item}>
              <p>{song}</p>
              <p>{author}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
