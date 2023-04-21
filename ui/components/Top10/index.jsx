import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/Top10/Top10.module.scss';
import Track from '@/ui/components/Track';
import Options from '@/ui/components/Options';

const Top10 = ({ audioTop }) => {
  return (
    <div className={styles.wrapper}>
      <div className='title'>Топ 10</div>
      <Options like={true} queue={[true, [...audioTop.data]]} size={'lg'} />

      {audioTop.data?.map(({ id, attributes }, index) => (
        <Track key={id} id={id} index={index + 1} attributes={attributes} />
      ))}
      <span className={styles.link}>
        <Link href={'/allAudios'}>Посмотреть все треки</Link>
      </span>
    </div>
  );
};

export default Top10;
