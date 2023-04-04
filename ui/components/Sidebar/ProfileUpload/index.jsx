import React from 'react';

import styles from '../ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  return (
    <>
      <div className={styles.wrapper}>
        <input type={'file'} />
      </div>
    </>
  );
}
