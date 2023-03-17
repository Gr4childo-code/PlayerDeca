import React, { useState } from 'react';
import Image from 'next/image';

import styles from '@/ui/components/Playlist_Page/Playlist_Page.module.scss';
const Playlist_Page = () => {
  const [isPlay, setIsPlay] = useState(true);

  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <div className={styles.left_side}>
          <div className='image'>
            <Image
              src={'https://via.placeholder.com/300x300'}
              width={300}
              height={300}
              alt={'Image playlist'}
            />
          </div>
          <div className={styles.description}>
            <div className={styles.release}>
              Release: <span className={styles.date}>2023-03-30</span>
            </div>
            <div className={styles.rating}>
              Rating: <span className={styles.number}>******</span>
            </div>
          </div>
        </div>
        <div className={styles.rigth_side}>
          <div className={styles.playlist_name}>Playlst name</div>
          <div className={styles.playlist_author}>Author</div>
          <div className={styles.list_item}>
            <div className={styles.number}>1</div>
            <div className={styles.list_item_music}>
              <div className={styles.author}>Автор песенки</div>
              <div>название песенки</div>
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
      </div>
    </div>
  );
};

export default Playlist_Page;
