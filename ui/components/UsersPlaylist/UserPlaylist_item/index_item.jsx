import React, { useState } from 'react';
import styles from './UsersPlaylist_item.module.scss';
import { useRouter } from 'next/router';

import Image from 'next/image';
const Playlist_item = ({ audio }) => {
  const [isPlay, setIsPlay] = useState(true);

  const router = useRouter();
  return (
    <div className={styles.playlist_item} key={audio.id}>
      <div className={styles.header}>
        <Image
          className={styles.image}
          src={audio.image}
          width={150}
          height={150}
          alt={audio.nameplaylist}
          onClick={() => {
            router.push(`/playlist/${audio.id}`);
          }}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.subtitle}>
          <span className={styles.author}>Author: {audio.author}</span>
          <p className={styles.nameplaylist}>Playlist: {audio.nameplaylist}</p>
        </div>
        <div className={styles.options}>
          <div
            className={`${styles.playerBox__play} ${
              !isPlay ? styles.active : ''
            }`}
            onClick={() => {
              setIsPlay(!isPlay);
            }}></div>
          <i className='fa-regular fa-heart'></i>
        </div>
      </div>
    </div>
  );
};

export default Playlist_item;