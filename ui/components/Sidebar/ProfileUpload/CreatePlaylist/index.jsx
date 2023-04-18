import React, { useState } from 'react';

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
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleSelect = (e) => {
    console.log(e.target.value);
    const audio = e.target.value;
    setSelectedFiles([...selectedFiles, audio]);
    console.log(selectedFiles);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles([
      ...selectedFiles.slice(0, index),
      ...selectedFiles.slice(index + 1),
    ]);
  };

  return (
    <div className={styles.playlists}>
      <div className={styles.playlists__left}>
        <div className={styles.playlists__create}>
          <p className={styles.playlists__title}>Создать подборку</p>
          <input
            className={styles.playlists__name}
            value={playlistName}
            placeholder='Введите название...'
            onChange={(e) => handlePlaylistName(e)}
          />
        </div>
        <div>
          <ul className={styles.playlists__added}>
            {selectedFiles.map((element, index) => (
              <li key={index} className={styles.playlists__item}>
                {index + 1}. {element}
                <button
                  className={styles.button__remove}
                  onClick={() => handleRemoveFile(index)}
                >
                  &mdash;
                </button>
              </li>
            ))}
          </ul>
          {selectedFiles.length >= 2 ? (
            <button
              className={styles.playlists__button}
              onClick={() => uploadPlaylist(selectedFiles)}
            >
              Загрузить
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={styles.playlists__right}>
        {loader ? (
          <ul className={styles.playlists__list}>
            <p className={styles.playlists__info}>
              Всего загружено: {playlist.length} песен
            </p>
            <div className={styles.playlists__select}>
              <select
                className={styles.select}
                onChange={handleSelect}
                multiple
              >
                <option>Выберите песни...</option>
                {playlist.map(({ id, attributes }, index) => {
                  return (
                    <option
                      key={id}
                      value={attributes.author}
                      className={styles.option}
                    >
                      {index + 1}. {attributes.author.slice(0, 20)} -{' '}
                      {attributes.name.slice(0, 25)}
                    </option>
                  );
                })}
              </select>
            </div>
          </ul>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
}

{
  /* {playlist.map(({ name, author }, index) => (
  <li key={index} className={styles.playlists__item}>
    {index + 1}. {author} - {name}
    <div>
      <button
        className={styles.button__remove}
        onClick={() => handleDeleteSongPlaylist(index)}
      >
        &mdash;
      </button>
    </div>
  </li>
))} */
}
