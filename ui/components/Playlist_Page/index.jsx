import React from 'react';
import Image from 'next/image';

import styles from '@/ui/components/Playlist_Page/Playlist_Page.module.scss';
import Track from '../Track';

const Playlist_Page = ({ audio }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.side__bar}>
        <Image
          src={'https://via.placeholder.com/300x300'}
          width={300}
          height={300}
          alt={'Image playlist'}
        />
        <div className={styles.release}>
          Release: <span className={styles.release__dates}>2023-03-30</span>
        </div>
        <div className={styles.rate}>
          Rating: <span className={styles.rate__star}>******</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title__release}>Релиз</div>
          <div className={styles.title__name}>Название Playlist`a</div>
          <div className={styles.title__author}>Автор</div>
        </div>
        <hr className={styles.hr} />
        {audio &&
          audio?.map(({ id, attributes }, index) => (
            <Track key={id} id={id} index={index + 1} attributes={attributes} />
          ))}
      </div>
    </div>
  );
};

export default Playlist_Page;
