import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Preloader from '@/ui/components/global/Preloader';

import { createAudios } from '@/api';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  const music = useRef(null);
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const { data: session } = useSession();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setLoader(true);
    } else if (e.type === 'dragleave') {
      setLoader(false);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoader(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const audioData = e.dataTransfer.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.dataTransfer.files[0],
      };
      createAudios(
        {
          data: {
            name: audio.name,
            author: audio.author,
          },
          files: {
            src: audio.src,
            poster: poster.current,
          },
        },
        session?.jwt
      ).then(() => setLoader(true));
    }
  };

  const upload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoader(false);

    if (e.target.files && e.target.files[0]) {
      const audioData = e.target.files[0].name.split('.mp3', [1]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.target.files[0],
      };
      createAudios(
        {
          data: {
            name: audio.name,
            author: audio.author,
          },
          files: {
            src: audio.src,
            poster: poster.current,
          },
        },
        session?.jwt
      ).then(() => setLoader(true));
    }
  };

  return (
    <>
      <h3>Добавить песню</h3>
      {loader ? (
        <form onDragEnter={handleDrag} onSubmit={upload}>
          <div
            className={styles.wrapper}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <label className={styles.subTitle}>Выберите обложку</label>
            <input
              required
              className={styles.input}
              type={'file'}
              onChange={(e) => {
                poster.current = e.target.files[0];
              }}
              accept='image/jpeg, image/jpg, image/png, image/webp'
            />
            <label className={styles.subTitle}>
              Выберите или перетащите песню
            </label>
            <input
              required
              className={styles.input}
              type={'file'}
              onChange={(e) => {
                music.current = e.target.files[0];
              }}
              accept='audio/mp3'
            />
            <button className={styles.button}>Загрузить</button>
          </div>
        </form>
      ) : (
        <Preloader />
      )}
    </>
  );
}
