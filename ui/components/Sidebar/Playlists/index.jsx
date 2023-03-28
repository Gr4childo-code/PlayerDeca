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
            <li key={id} className={styles.playlists__item}>
              <Link href={'/'}>
                <img className={styles.img} src={img.src} alt={'imgPlaylist'} />
                <p className={styles.playlists__descr}>Playlist: {id}</p>
              </Link>
            </li>
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
