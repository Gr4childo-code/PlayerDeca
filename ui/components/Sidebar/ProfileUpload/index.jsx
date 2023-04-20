import React, { useRef, useState } from 'react';
import Preloader from '@/ui/components/global/Preloader';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function DragAndDrop({ handleFilesToUpload, loader }) {
  const poster = useRef(null);
  const [active, setActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setActive(true);
    } else if (e.type === 'dragleave') {
      setActive(false);
    }
  };
  const handleSelectFile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      const data = e.dataTransfer.files[0].name.split('.mp3', [1]);
      const file = {
        name: data[0].split(' - ')[1],
        author: data[0].split(' - ')[0],
        src: e.dataTransfer.files[0],
        poster: poster.current,
      };
      console.log('Добавлена песня: ', file);
      return handleFilesToUpload(file);
    } else if (e.target.files) {
      const data = e.target.files[0].name.split('.mp3', [1]);
      const file = {
        name: data[0].split(' - ')[1],
        author: data[0].split(' - ')[0],
        src: e.target.files[0],
        poster: poster.current,
      };
      console.log('Добавлена песня: ', file);
      return handleFilesToUpload(file);
    }
  };

  return (
    <div className={styles.dropzone}>
      {loader ? (
        <form>
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
              className={`${styles.dropzone__wrapper} ${
                active && styles.dropzone__wrapper__active
              }`}
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
