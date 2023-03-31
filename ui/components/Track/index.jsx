import React from 'react';
import styles from '@/ui/components/Track/Track.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Track = ({ id, index, attributes }) => {
  return (
    <div className={styles.track} key={id}>
      <div className={styles.track__number}>{index}</div>
      <div className={styles.track__cover}>
        {attributes.posterPath ? (
          <img src={process.env.NEXT_PUBLIC_API_URL + attributes.posterPath} />
        ) : (
          <FontAwesomeIcon icon={faMusic} />
        )}
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
