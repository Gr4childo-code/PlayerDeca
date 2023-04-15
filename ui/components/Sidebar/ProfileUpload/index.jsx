import React, { useRef, useState, useEffect, use } from 'react';
import Preloader from '@/ui/components/global/Preloader';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function DragAndDrop({
  file,
  loader,
  poster,
  handleDrag,
  handleSelectFile,
  handleAddSongPlaylist,
  handleDeleteSongPlaylist,
}) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__right}>
          <p className={styles.title}>Загруженные</p>
          <ul className={styles.list}>
            {file.map(({ name, author }, index) => (
              <li key={index} className={styles.item} draggable>
                {index + 1}. {author} - {name}
                <div>
                  <button
                    className={styles.button}
                    onClick={handleAddSongPlaylist}
                  >
                    +
                  </button>
                  <button
                    className={styles.button}
                    onClick={handleDeleteSongPlaylist}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {loader ? (
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
                  2. Перенесите песню в формате mp3 <br /> или <br /> выберите
                  её
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
    </div>
  );
}
