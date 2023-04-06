import React, { useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

import { createAudios } from '@/api';

import styles from '../ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  const music = useRef(null);
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { data: session } = useSession();

  const uploads = async (e) => {
    e.preventDefault();

    if (session) {
      setLoader(false);

      createAudios(
        {
          data: {
            name: '',
            author: '',
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
            <input
              className={styles.input}
              type={'file'}
              onChange={(e) => (music.current = e.target.files[0])}
            />
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
    </>
  );
}
