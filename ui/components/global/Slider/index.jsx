import { useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

const initLists = [
  {
    id: 1,
    song: 'song1',
    author: 'author1',
  },
  {
    id: 2,
    song: 'song2',
    author: 'author2',
  },
  /*   {
    id: 3,
    author: 'author3',
    song: 'song3',
  },
  {
    id: 4,
    author: 'author4',
    song: 'song4',
  }, */
];

export default function Slider() {
  const [musicCard, setMusicCard] = useState(initLists);
  const [idCard, setIdCard] = useState(null);

  const getIdCard = () => {
    setIdCard();
  };

  const leftArrowClick = () => {
    console.log('left');
  };
  const rightArrowClick = () => {
    console.log('right');
  };

  const allMusicCard = initLists.map((initList) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card_img}>
          {initList.id} Card
          <div className={styles.wrapper_button}>
            <button onClick={leftArrowClick}>
              <a href=''>left</a>
            </button>
            <button onClick={rightArrowClick}>
              <a href=''>right</a>
            </button>
          </div>
        </div>
        <div className={styles.card_item}>
          <ul key={initList.id}>
            <li>{initList.song}</li>
            <li>{initList.author}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className='container'>
      <h2>Новинки DLESS</h2>

      {allMusicCard}
    </div>
  );
}
