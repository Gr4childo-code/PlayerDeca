import React, { useContext } from 'react';
import AppContext from '@/ui/components/global/AppContext';
import styles from '@/ui/components/Top10/Top10.module.scss';
import Track from '../Track';

const Top10 = ({ audioTop }) => {
  const { setAudioContext } = useContext(AppContext);

  return (
    <div className='container'>
      <div className={styles.wrapper} onClick={() => setAudioContext(audioTop)}>
        <div className='title'>Топ 10</div>
        {audioTop.data?.map(({ id, attributes }, index) => (
          <Track key={id} id={id} index={index + 1} attributes={attributes} />
        ))}
      </div>
    </div>
  );
};

export default Top10;
