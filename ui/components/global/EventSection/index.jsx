import React from 'react';
import { EventItem } from './EventItem';

export default function EventSection() {
  return (
    <>
      <h2>События</h2>
      <EventItem
        dataEvent={'30'}
        dataMonth={'Марта'}
        dataYear={'2023'}
        dataTime={'15:00'}
        title={'Презентация стримингового сервиса DLESS'}
        author={'Проект представят стажёры Декатлона'}
        img={
          'https://ic.pics.livejournal.com/dain666/1488818/491213/491213_original.png'
        }
      />
      <EventItem
        dataEvent={'31'}
        dataMonth={'Марта'}
        dataYear={'2023'}
        dataTime={'12:00'}
        title={'Декатлон: франшиза или закрытие?'}
        author={'Жереми Анжелар'}
        img={
          'https://play-lh.googleusercontent.com/5SA-3vo78uGvVrTQ-Or-XrjYMum8r7lAgmGxPHP5aWUidCBUuJbZbny8M2c8NWNJPRo'
        }
      />
    </>
  );
}
