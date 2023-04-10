import { useState } from 'react';
import styles from '@/ui/components/Track/Track.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Options from '@/ui/components/Options';
const Track = ({ id, index, attributes }) => {
  const [isPlay, setIsPlay] = useState(false);
  return (
    <div className={styles.track} key={id}>
      <div className={styles.track__number}>{index}</div>

      <div className={styles.track__cover}>
        {attributes.poster.data?.attributes ? (
          <img
            src={
              process.env.NEXT_PUBLIC_API_URL +
              attributes.poster.data?.attributes.url
            }
          />
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
          <Options play={true} size={'lg'} />
        </div>
      </div>

      <div className={styles.track__music}>
        <p className={styles.track__music__name}>{attributes.name}</p>

        <p className={styles.track__music__author}>{attributes.author}</p>
      </div>
      <div className={styles.track__options}>
        <Options like={true} queue={true} size={'mg'} />
      </div>
    </div>
  );
};

export default Track;
