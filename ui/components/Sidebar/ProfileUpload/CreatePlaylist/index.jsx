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
    <div>
      <p className={styles.title}>Создать плейлист</p>
      <ul className={styles.list}>
        <input
          className={styles.input__playlistName}
          value={playlistName}
          placeholder='Придумайте название плейлиста...'
          onChange={(e) => handlePlaylistName(e)}
        />
        {playlist.map(({ name, author }, index) => (
          <li key={index} className={styles.item}>
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
