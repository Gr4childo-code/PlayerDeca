import React, { useContext } from 'react';
import AppContext from '../global/AppContext';
import styles from '@/ui/components/Top10/Top10.module.scss';
import Track from '../Track';

const Top10 = ({ audioTop }) => {
  const context = useContext(AppContext);
  const changeContext = () => {
    context.setAudioContext(audioTop);
  };
  return (
    <>
      <div className={styles.wrapper} onClick={changeContext}>
        <div className='title'>Топ 10</div>
        {audioTop.data?.map(({ id, attributes }, index) => (
          <Track key={id} id={id} index={index + 1} attributes={attributes} />
        ))}
      </div>
    </>
  );
};

export default Top10;
