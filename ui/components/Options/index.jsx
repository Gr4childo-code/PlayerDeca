import { useState } from 'react';
import styles from '@/ui/components/Options/Options.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faStop, faPlay } from '@fortawesome/free-solid-svg-icons';
const Options = ({
  play = false,
  like = false,
  queue = false,
  size = 'xs',
}) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className={styles.wrapper}>
      {play && (
        <div
          onClick={() => {
            setIsPlay(!isPlay);
          }}
          className={styles.options}
        >
          {isPlay ? (
            <FontAwesomeIcon icon={faStop} size={size} />
          ) : (
            <FontAwesomeIcon icon={faPlay} size={size} />
          )}
        </div>
      )}

      {like && (
        <div className={styles.options}>
          <FontAwesomeIcon icon={faHeart} size={size} />
        </div>
      )}
      {queue && (
        <div className={styles.options}>
          <FontAwesomeIcon icon={faPlus} size={size} />
        </div>
      )}
    </div>
  );
};

export default Options;
