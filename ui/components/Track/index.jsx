import React from 'react';
import styles from '@/ui/components/Track/Track.module.scss';
const Track = ({ id, index, attributes }) => {
  return (
    <div className={styles.track} key={id}>
      <div className={styles.track__number}>{index}</div>
      <div className={styles.track__cover}>
        {attributes?.posterPath && (
          <img
            src={process.env.NEXT_PUBLIC_API_URL + attributes?.posterPath}
            className={styles.track__cover__img}
          />
        )}
      </div>
      <div className={styles.track__music}>
        <p className={styles.track__music__name}>{attributes.name}</p>

        <p className={styles.track__music__author}>{attributes.author}</p>
      </div>
      <div className={styles.track__options}>
        {/* <div
          className={`${styles.playerBox__play} ${
            !isPlay ? styles.active : ''
          }`}
          onClick={() => {
            setIsPlay(!isPlay);
          }}></div> */}
        <i className='fa-regular fa-heart'></i>
      </div>
    </div>
  );
};

export default Track;
