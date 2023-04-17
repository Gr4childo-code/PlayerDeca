import React, { useContext } from 'react';
import Link from 'next/link';

import AppContext from '@/ui/components/global/AppContext';
import styles from '@/ui/components/Top10/Top10.module.scss';
import Track from '@/ui/components/Track';

const Top10 = ({ audioTop }) => {
  const { setAudioContext } = useContext(AppContext);

  return (
    <div className='container'>
      <div className={styles.wrapper} onClick={() => setAudioContext(audioTop)}>
        <div className='title'>Топ 10</div>
        {audioTop.data?.map(({ id, attributes }, index) => (
          <Track key={id} id={id} index={index + 1} attributes={attributes} />
        ))}
        <span className={styles.link}>
          <Link href={'/allAudios'}>Посмотреть все треки</Link>
        </span>
      </div>
    </div>
  );
};

export default Top10;
