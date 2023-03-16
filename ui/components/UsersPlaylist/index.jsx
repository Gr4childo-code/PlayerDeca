import React from 'react';
import styles from './UsersPlaylist.module.scss';
import UserPlaylist_item from './UserPlaylist_item';

const playList = [
  [
    {
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '1',
      author: 'Danill',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '2',
      author: 'Danill',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: '3',
      author: 'Danill',
    },
  ],

  [
    {
      image: 'https://via.placeholder.com/150x150',
      nameplaylist: 'Phonk',
      author: 'Aleksey',
    },
    {
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
            <UserPlaylist_item
              audio={audio}
              // key={audio.id}
              // image={audio.image}
              // nameplaylist={audio.nameplaylist}
              // author={audio.author}
              // id={audio.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersPlaylist;
