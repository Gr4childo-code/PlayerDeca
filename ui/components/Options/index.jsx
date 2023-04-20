import { useState, useContext } from 'react';
import styles from '@/ui/components/Options/Options.module.scss';
import AppContext from '@/ui/components/global/AppContext';

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
  const { setAudioContext, audioContext } = useContext(AppContext);
  console.log();
  const addInQueue = (musicItem) => {
    if (musicItem !== undefined && musicItem.id !== audioContext.data) {
      setAudioContext({
        data: [...audioContext.data, ...musicItem],
      });
    } else {
      console.log('Одинаковые Id');
    }
  };
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
          <FontAwesomeIcon
            icon={faPlus}
            size={size}
            onClick={() => addInQueue(queue[1])}
          />
        </div>
      )}
    </div>
  );
};

export default Options;
