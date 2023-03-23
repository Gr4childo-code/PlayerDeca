import React from 'react';
import styles from '@/ui/components/Top10/Top10.module.scss';
import Track from '../Track';

const Top10 = ({ audioTop }) => {
  return (
    <div className={styles.wrapper}>
      <div className='title'>Топ 10</div>
      {audioTop.data?.map(({ id, attributes }, index) => (
        <Track key={id} id={id} index={index + 1} attributes={attributes} />
      ))}
    </div>
  );
};

export default Top10;
