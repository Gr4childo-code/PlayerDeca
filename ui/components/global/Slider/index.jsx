import { useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

const initLists = [
  {
    id: 1,
    author: 'author1',
    song: 'song1',
  },
  {
    id: 2,
    author: 'author2',
    song: 'song2',
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

  const leftArrowClick = () => {
    console.log('left');
  };
  const rightArrowClick = () => {
    console.log('right');
  };

  const allMusicCard = initLists.map((initList) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card_img}>{initList.id} Component</div>
        <div className={styles.card_item}>
          <ul key={initList.id}>
            <li>{initList.author}</li>
            <li>{initList.song}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <div className='container'>
      <h2>Новинки DLESS</h2>
      <button onClick={leftArrowClick}>left</button>
      <button onClick={rightArrowClick}>right</button>
      {allMusicCard}
    </div>
  );
}
