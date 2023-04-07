import { useContext } from 'react';
import AppContext from '@/ui/components/global/AppContext';

import styles from '@/ui/components/Playlist_Page/Playlist_Page.module.scss';
import Track from '../Track';

const Playlist_Page = ({ playlist }) => {
  const { setAudioContext } = useContext(AppContext);

  const { audio, poster, users_permissions_user } = playlist[0].attributes;
  return (
    <div className={styles.wrapper}>
      <div className={styles.side__bar}>
        <div className={styles.side__bar__cover}>
          {poster.data?.attributes?.url && (
            <img
              src={
                process.env.NEXT_PUBLIC_API_URL + poster.data.attributes?.url
              }
              className={styles.side__bar__cover__img}
            />
          )}
        </div>
        <div className={styles.side__bar__description}>
          <div className={styles.release}>
            Release:
            <span className={styles.release__dates}>
              {playlist[0].attributes.createdAt.slice(0, 10)}
            </span>
          </div>
          <div className={styles.rate}>
            Rating:<span className={styles.rate__star}>******</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.title__release}>Релиз</div>
          <div className={styles.title__name}>
            {playlist[0].attributes.title}
          </div>
          <div className={styles.title__author}>
            {users_permissions_user.data.attributes.name}
          </div>
        </div>
        <hr className={styles.hr} />
        <div
          className={styles.tracks}
          onClick={() => {
            setAudioContext(audio);
          }}
        >
          {audio ? (
            audio &&
            audio?.data.map(({ id, attributes }, index) => (
              <Track
                key={id}
                id={id}
                index={index + 1}
                attributes={attributes}
              />
            ))
          ) : (
            <div className={styles.nonTrack}>Треков нет</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist_Page;
