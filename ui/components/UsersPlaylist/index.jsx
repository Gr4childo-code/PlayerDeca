import React from 'react';
import styles from './UsersPlaylist.module.scss';
import UserPlaylist_item from './UserPlaylist_item';

const playList = [
  [
    {
      id: 1,
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '1',
      author: 'Danill',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '2',
      author: 'Danill',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '3',
      author: 'Danill',
    },
  ],

  [
    {
      id: 4,
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: 'Phonk',
      author: 'Aleksey',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: 'Phonk',
      author: 'Aleksey',
    },
  ],
];
const UsersPlaylist = () => {
  console.log(playList);
  return (
    <div>
      <h2 className={styles.title}>
        <span>d</span>
        less USERS PLAYLIST
      </h2>
      <div className={styles.container_wrapper}>
        <div className={styles.container_playlist}>
          {playList.map((audio) => (
            <UserPlaylist_item audio={audio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPlaylist;
