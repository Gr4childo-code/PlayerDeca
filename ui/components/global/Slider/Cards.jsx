import React, { use, useState } from 'react';

import styles from '@/ui/components/global/Slider/Slider.module.scss';

const musicData = [
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
];

export default function Cards() {
  const [cards, setCards] = useState(musicData);

  const card = cards.map((card) => {
    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.button}>
            <button
              className={styles.button_left}
              onClick={() => {
                console.log('left');
              }}>
              left
            </button>
            <button
              className={styles.button_right}
              onClick={() => {
                console.log('right');
              }}>
              right
            </button>
          </div>
          <div className={styles.header}>
            <h3>{card.id} Card</h3>
          </div>
          <div>
            <ul key={card.id} className={styles.wrapper_list}>
              <li className={styles.wrapper_item}>{card.author}</li>
              <li className={styles.wrapper_item}>{card.song}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='container'>
      <h2>Новинки на DLESS</h2>

      {card}
    </div>
  );
}
