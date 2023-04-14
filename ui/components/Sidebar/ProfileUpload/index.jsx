import React, { useRef, useState, useEffect, use } from 'react';
import { useSession } from 'next-auth/react';
import Preloader from '@/ui/components/global/Preloader';

import { createAudios } from '@/api';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function DragAndDrop() {
  const poster = useRef(null);
  const [loader, setLoader] = useState(true);
  const [file, setFile] = useState([]);
  const { data: session } = useSession();
  const [playlist, setPlaylist] = useState([]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setLoader(true);
    } else if (e.type === 'dragleave') {
      setLoader(false);
    }
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    /* setLoader(false); */

    if (e.dataTransfer) {
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const audioData = e.dataTransfer.files[0].name.split('.mp3', [1]);
        const audio = {
          name: audioData[0].split(' - ')[1],
          author: audioData[0].split(' - ')[0],
          src: e.dataTransfer.files[0],
        };
        setFile([...file, audio]);
        console.log(file);
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
    } else if (e.target.files) {
      const audioData = e.target.files[0].name.split('.mp3' && '_' && ' (', [
        1,
      ]);
      const audio = {
        name: audioData[0].split(' - ')[1],
        author: audioData[0].split(' - ')[0],
        src: e.target.files[0],
      };
      setFile([...file, audio]);
      console.log(file);
      /* createAudios(
        {
          data: {
            name: audio.name,
            author: audio.author,
          },
          files: {
            src: e.target.files[0],
            poster: poster.current,
          },
        },
        session?.jwt
      ).then(() => setLoader(true)); */
    }
  };
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
                  <button className={styles.button}>+</button>
                  <button className={styles.button}>-</button>
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
                className={styles.wrapper__dropzone}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleSelectFile}
              >
                <label className={styles.subTitle}>
                  Перенесите песню в формате mp3 <br /> или <br /> выберите её
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
      <div>Создать плейлист: {playlist}</div>
    </div>
  );
}
