import React, { useState } from 'react';
import styles from '@/ui/components/UsersPlaylist/UserPlaylist_item/UsersPlaylist_item.module.scss';
import Playlist_item from './index_item';

const UserPlaylist_item = ({ audio }) => {
  return (
    <div className={styles.wrapper}>
      {audio.map((audio, index) => (
        <Playlist_item audio={audio} key={index} />
      ))}
    </div>
  );
};

export default UserPlaylist_item;
