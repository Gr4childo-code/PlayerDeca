import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../Playlists/Playlists.module.scss';

export default function Playlists({ playlistsData, img }) {
  const playlists = (
    <div className={styles.wrapper}>
      <ul className={styles.playlists__list}>
        {playlistsData.map(({ id, img }) => {
          return (
            <Link href={'/'}>
              <li key={id} className={styles.playlists__item}>
                <Image
                  className={styles.img}
                  width={150}
                  height={150}
                  src={img}
                />
                <p className={styles.playlists__descr}>Playlist: {id}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      <h3 className={styles.title}>
        <span>P</span>laylists
      </h3>
      {playlists}
    </>
  );
}
