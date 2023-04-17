import React from 'react';

import Preloader from '@/ui/components/global/Preloader';

import styles from '@/ui/components/Sidebar/ProfileUpload/CreatePlaylist/CreatePlaylists.module.scss';

export default function CreatePlaylist({
  loader,
  playlist,
  playlistName,
  uploadPlaylist,
  handlePlaylistName,
  handleDeleteSongPlaylist,
}) {
  return (
    <div className={styles.playlists}>
      {loader ? (
        <ul className={styles.playlists__list}>
          {playlist.length !== 0 && (
            <div>
              <p className={styles.playlists__title}>Создать подборку</p>
              <input
                className={styles.playlists__name}
                value={playlistName}
                placeholder='Введите название...'
                onChange={(e) => handlePlaylistName(e)}
              />
            </div>
          )}
          {playlist.map(({ name, author }, index) => (
            <li key={index} className={styles.playlists__item}>
              {index + 1}. {author} - {name}
              <div>
                {/* <button className={styles.button}>&#8593;</button>
              <button className={styles.button}>&#8595;</button> */}
                <button
                  className={styles.button__remove}
                  onClick={() => handleDeleteSongPlaylist(index)}
                >
                  &mdash;
                </button>
              </div>
            </li>
          ))}
          {playlist.length !== 0 ? (
            <button
              className={styles.playlists__button}
              onClick={() => uploadPlaylist()}
            >
              Загрузить
            </button>
          ) : (
            ''
          )}
        </ul>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
