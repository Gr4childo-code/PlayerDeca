import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Preloader from '../../global/Preloader';

import { createAudios } from '@/api';

import styles from '../ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const music = useRef(null);
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const { data: session } = useSession();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const uploads = async (e) => {
    e.preventDefault();

    if (session) {
      setLoader(false);
      createAudios(
        {
          data: {
            name: name,
            author: author,
          },
          files: {
            src: music.current,
            poster: poster.current,
          },
        },
        session?.jwt
      ).then(() => setLoader(true));
    }
    setFileName('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const test = e.dataTransfer.files[0].name.split('.mp3', [1]);
      const audioInfo = {
        name: test[0].split(' - ')[1],
        author: test[0].split(' - ')[0],
        src: e.dataTransfer.files[0],
      };
      createAudios(
        {
          data: {
            name: audioInfo.name,
            author: audioInfo.author,
          },
          files: {
            src: audioInfo.src,
            poster: poster.current,
          },
        },
        session?.jwt
      ).then(() => setLoader(true));
    }
    setFileName('');
  };

  useEffect(() => {
    if (file) {
      setFileName(file.name);
    }
  }, [file]);

  return (
    <>
      <h3>Добавить песню</h3>
      {loader ? (
        <form /* onSubmit={uploads}  */ onDragEnter={handleDrag}>
          <div
            className={styles.wrapper}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {/* <input
              required
              type='text'
              className={styles.input}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder='Название'
            />
            <input
              required
              type='text'
              className={styles.input}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              placeholder='Автор'
            /> */}
            <div className={styles.files}>
              <label className={styles.subTitle}>Выберите песню</label>
              <input
                required
                className={styles.input}
                type={'file'}
                onChange={(e) => {
                  music.current = e.target.files[0];
                  setFile(music.current);
                }}
                accept='audio/mp3'
              />
              <p>{fileName && <p className={styles.info}>{fileName}</p>}</p>
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
            </div>
            {/* <button className={styles.button}>Загрузить</button> */}
          </div>
        </form>
      ) : (
        <Preloader />
      )}
    </>
  );
}
