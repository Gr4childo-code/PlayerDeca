import React, { useState } from 'react';
import styles from '@/ui/components/Track/Track.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMusic, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';

const Track = ({ id, index, attributes }) => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className={styles.track} key={id}>
      <div className={styles.track__number}>{index}</div>

      <div className={styles.track__cover}>
        {attributes.posterPath ? (
          <img src={process.env.NEXT_PUBLIC_API_URL + attributes.posterPath} />
        ) : (
          <div className={styles.track__cover__font}>
            <FontAwesomeIcon icon={faMusic} />
          </div>
        )}

        <div
          className={styles.track__hoverState}
          onClick={() => {
            setIsPlay(!isPlay);
          }}
        >
          {isPlay ? (
            <FontAwesomeIcon icon={faStop} size='lg' />
          ) : (
            <FontAwesomeIcon icon={faPlay} size='lg' />
          )}
        </div>
      </div>

      <div className={styles.track__music}>
        <p className={styles.track__music__name}>{attributes.name}</p>

        <p className={styles.track__music__author}>{attributes.author}</p>
      </div>
      <div className={styles.track__options}>
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
};

export default Track;
