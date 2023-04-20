import React from 'react';

import styles from '@/ui/components/Sidebar/ProfileUpload/CreatePlaylist/CreatePlaylists.module.scss';

export default function CreatePlaylist({
  playlist,
  playlistName,
  handleSelectOption,
  handleRemoveFile,
  uploadPlaylist,
  handlePlaylistName,
  newUserPlaylist,
  handleNewUserPlaylist,
  fileId,
}) {
  return (
    <div className={styles.playlists}>
      <div className={styles.playlists__left}>
        <div className={styles.playlists__create}>
          <p className={styles.playlists__title}>Создать подборку</p>
          {newUserPlaylist.length >= 2 && (
            <input
              className={styles.playlists__name}
              value={playlistName}
              placeholder='Введите название...'
              onChange={(e) => handlePlaylistName(e)}
            />
          )}
        </div>
        <div>
          <ul className={styles.playlists__added}>
            {newUserPlaylist.map(({ author, name }, index) => (
              <li key={index} className={styles.playlists__item}>
                {index + 1}. {author} - {name}
                <button
                  className={styles.button__remove}
                  onClick={() => handleRemoveFile(index)}
                >
                  &mdash;
                </button>
              </li>
            ))}
          </ul>
          {newUserPlaylist.length >= 2 && (
            <button
              className={styles.playlists__button}
              onClick={() => uploadPlaylist(fileId)}
            >
              Загрузить подборку
            </button>
          )}
        </div>
      </div>
      <div className={styles.playlists__right}>
        <ul className={styles.playlists__list}>
          <p className={styles.playlists__info}>
            Всего загружено: {playlist.length} песен
          </p>
          <div className={styles.playlists__select}>
            <select
              className={styles.select}
              onChange={handleSelectOption}
              multiple
            >
              <option className={styles.option__def}>
                &mdash;&mdash;&mdash; Выберите песни &mdash;&mdash;&mdash;
              </option>
              {playlist.map(({ id, attributes }, index) => {
                return (
                  <option
                    key={id}
                    value={id}
                    className={styles.option}
                    onClick={() => handleNewUserPlaylist(attributes)}
                  >
                    {index + 1}.
                    {attributes.author.slice(0, attributes.author.length)} -{' '}
                    {attributes.name.slice(0, attributes.name.length)}
                  </option>
                );
              })}
            </select>
          </div>
        </ul>
      </div>
    </div>
  );
}
