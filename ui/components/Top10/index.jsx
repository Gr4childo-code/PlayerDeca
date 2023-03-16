import React from 'react';

import styles from '@/ui/components/Top10/Top10.module.scss';
import Top10_item from './Top10_item';

const Top10 = ({ audioTop }) => {
  return (
    <div>
      <h2 className={styles.title}>
        Топ 10 <span>d</span>
        less TRACK
      </h2>
      <ul className={styles.list}>
        {audioTop.data?.map(({ id, attributes }, index) => (
          <Top10_item key={id} id={index + 1} attributes={attributes} />
        ))}
      </ul>
    </div>
  );
};

export default Top10;
