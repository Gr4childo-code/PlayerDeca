import React from 'react';
import Preloader from '@/ui/components/global/Preloader';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function DragAndDrop({
  poster,
  handleDrag,
  dragLoader,
  handleSelectFile,
}) {
  return (
    <div className={styles.dropzone}>
      {dragLoader ? (
        <form onDragEnter={handleDrag}>
          <p className={styles.dropzone__title}>Добавить песню</p>
          <div>
            <div className={styles.dropzone__wrapper}>
              <label className={styles.dropzone__info}>
                1. Выберите обложку в формате <br /> ( jpeg, jpg, png, webp ){' '}
                <br />
              </label>
              <input
                required
                className={styles.dropzone__input}
                type={'file'}
                onChange={(e) => {
                  poster.current = e.target.files[0];
                }}
                accept='image/jpeg, image/jpg, image/png, image/webp'
              />
            </div>
            <div
              className={styles.dropzone__wrapper}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleSelectFile}
            >
              <label className={styles.dropzone__info}>
                2. Перенесите песню в формате mp3 <br /> или <br /> выберите её
              </label>
              <input
                required
                type='file'
                className={styles.dropzone__input}
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
