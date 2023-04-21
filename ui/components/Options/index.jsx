import { useState, useContext } from 'react';
import Toast from '@/ui/components/global/Toast';

import AppContext from '@/ui/components/global/AppContext';
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
  const { setAudioContext, audioContext } = useContext(AppContext);
  const [list, setList] = useState([]);
  const checkUnique = () => {};
  const addInQueue = (musicItem) => {
    if (audioContext !== null) {
      if (musicItem !== undefined) {
        setAudioContext({
          data: [...audioContext.data, ...musicItem],
        });
      } else {
        setList([
          ...list,
          {
            id: Date.now(),
            type: 'warn',
            title: `Ошибка добавления музыки`,
            description: 'Одинаковую музыку нельзя добавлять больше 1 раза',
          },
        ]);
      }
    } else {
      setAudioContext({
        data: musicItem,
      });
      console.log('я сработал');
    }
  };
  return (
    <>
      <Toast toastlist={list} setList={setList} />
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
    </>
  );
};

export default Options;
