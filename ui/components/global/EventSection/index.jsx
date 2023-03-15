import React from 'react';

import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export default function EventSection() {
  return (
    <div>
      События
      <div className={styles.wrapper}>
        <ul>
          <li>30</li>
          <li>Марта</li>
          <li>2023</li>
          <li>12:00</li>
        </ul>
        <a href='http://'>
          <img
            src='https://ic.pics.livejournal.com/dain666/1488818/491213/491213_original.png'
            alt='done'
          />
        </a>
        <ul>
          <li>Что: Презентация стримингового сервиса DLESS</li>
          <li>Где: Google Meet</li>
          <li>Кто: Представят проект стажёры Декатлона</li>
        </ul>
        <div>
          <button>
            <a href='http://'> Купить пропуск </a>
          </button>
          <li>Ссылка на встречу</li>
        </div>
      </div>
    </div>
  );
}
