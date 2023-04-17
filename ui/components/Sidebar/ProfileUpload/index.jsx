import React, { useRef, useState, useEffect, use } from 'react';
import Preloader from '@/ui/components/global/Preloader';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function DragAndDrop({
  poster,
  handleDrag,
  dragLoader,
  handleSelectFile,
}) {
  return (
    <div>
      {dragLoader ? (
        <form onDragEnter={handleDrag}>
          <p className={styles.title}>Добавить песню</p>
          <div className={styles.wrapper__left}>
            <div className={styles.wrapper__dropzone}>
              <label className={styles.subTitle}>
                1. Выберите обложку в формате <br /> ( jpeg, jpg, png, webp ){' '}
                <br />
              </label>
              <input
                required
                className={styles.input}
                type={'file'}
                onChange={(e) => {
                  poster.current = e.target.files[0];
                }}
                accept='image/jpeg, image/jpg, image/png, image/webp'
              />
            </div>
            <div
              className={styles.wrapper__dropzone}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleSelectFile}
            >
              <label className={styles.subTitle}>
                2. Перенесите песню в формате mp3 <br /> или <br /> выберите её
              </label>
              <input
                required
                type='file'
                className={styles.input}
                onChange={handleSelectFile}
                placeholder='Автор'
                accept='audio/mp3'
              />
            </div>
          </div>
        </form>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
