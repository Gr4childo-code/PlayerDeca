import React from 'react';

import styles from '@/ui/components/Sidebar/ProfileUpload/Dropzone.module.scss';

export default function CreatePlaylist({
  playlist,
  playlistName,
  uploadPlaylist,
  handlePlaylistName,
  handleDeleteSongPlaylist,
}) {
  return (
    <div className={styles.playlists}>
      <p className={styles.playlists__title}>Создать подборку</p>
      <ul className={styles.playlists__list}>
        <input
          className={styles.input__playlistName}
          value={playlistName}
          placeholder='Придумайте название...'
          onChange={(e) => handlePlaylistName(e)}
        />
        {playlist.map(({ name, author }, index) => (
          <li key={index} className={styles.playlists__item}>
            {index + 1}. {author} - {name}
            <div>
              <button
                className={styles.button}
                onClick={() => handleDeleteSongPlaylist(index)}
              >
                -
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
    </div>
  );
}
