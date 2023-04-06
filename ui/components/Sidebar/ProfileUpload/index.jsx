import React, { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import UploadedUsersSongs from '../ProfileUserMusic';

import { createAudios } from '@/api';

import styles from '../ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload({ audios }) {
  const music = useRef(null);
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
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

  return (
    <>
      {loader ? (
        <form onSubmit={uploads}>
          <div className={styles.wrapper}>
            <label>Название трека</label>
            <input
              type='text'
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Имя автора</label>
            <input
              type='text'
              className={styles.input}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label>Добавьте песню</label>
            <input
              className={styles.input}
              type={'file'}
              onChange={(e) => (music.current = e.target.files[0])}
            />
            <label>Добавьте обложку</label>
            <input
              className={styles.input}
              type={'file'}
              onChange={(e) => (poster.current = e.target.files[0])}
            />
            <button className={styles.button}>upload</button>
          </div>
        </form>
      ) : (
        <div>Loading...</div>
      )}
      <UploadedUsersSongs audios={audios} />
    </>
  );
}
