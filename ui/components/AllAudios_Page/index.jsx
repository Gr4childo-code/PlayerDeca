import React from 'react';
import Track from '@/ui/components/Track';
import styles from '@/ui/components/AllAudios_Page/AllAudios_Page.module.scss';
const AllAudios_Page = ({ audios }) => {
  return (
    <div className={styles.wrapper}>
      <div className={'title'}>Все треки</div>
      {audios ? (
        audios &&
        audios?.data.map(({ id, attributes }, index) => (
          <Track key={id} id={id} index={index + 1} attributes={attributes} />
        ))
      ) : (
        <div className={styles.nonTrack}>Треков нет</div>
      )}
    </div>
  );
};

export default AllAudios_Page;
