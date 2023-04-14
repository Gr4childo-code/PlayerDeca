import React, { useRef, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Preloader from '@/ui/components/global/Preloader';

import { createAudios } from '@/api';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function ProfileUpload() {
  const music = useRef(null);
  const poster = useRef(null);
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [file, setFile] = useState(null);
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
      /* setFile(`${audio.author} - ${audio.name}`); */
      /* createAudios(
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
      ).then(() => setLoader(true)); */
    }
  };

  const upload = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer) {
      setFile(e.dataTransfer.files[0].name);
      console.log(e.dataTransfer.files[0].name);
    } else if (e.target.files) {
      setFile(e.target.files[0].name);
      console.log(e.target.files[0].name);
    }
  };

  return (
    <>
      <h3>Добавить песню</h3>
      {loader ? (
        <form onDragEnter={handleDrag} onSubmit={upload}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper__zone}>
              <label className={styles.subTitle}>
                Выберите обложку <br />
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
              className={styles.wrapper__zone}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleSelectFile}
            >
              <label className={styles.subTitle}>
                {!file
                  ? 'Перетащите песню в mp3 формате'
                  : `Вы добавили : ${file}`}
              </label>

              <label className={styles.subTitle}>или</label>
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
              <input
                required
                type='file'
                className={styles.input}
                onChange={handleSelectFile}
                placeholder='Автор'
                accept='audio/mp3'
              />
            </div>
            {poster && (author || file) ? (
              <button className={styles.button}>Загрузить</button>
            ) : (
              ''
            )}
          </div>
        </form>
      ) : (
        <Preloader />
      )}
    </>
  );
}
