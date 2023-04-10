import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { createAudios } from '@/api';

import styles from '../ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  const music = useRef(null);
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const { data: session } = useSession();

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
        <form onSubmit={uploads}>
          <div className={styles.wrapper}>
            <input
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
            />
            <label>Выберите песню</label>
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
            {fileName && <span className={styles.info}>{fileName}</span>}
            <label>Выберите обложку</label>
            <input
              required
              className={styles.input}
              type={'file'}
              onChange={(e) => {
                poster.current = e.target.files[0];
              }}
              accept='image/jpeg, image/jpg, image/png, image/webp'
            />
            <button className={styles.button}>Загрузить</button>
          </div>
        </form>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
