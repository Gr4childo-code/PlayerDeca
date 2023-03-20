import React from 'react';
import { EventItem } from './EventItem';

export default function EventSection() {
  const event = [
    {
      id: 1,
      dataEvent: 30,
      dataMonth: 'Марта',
      dataYear: "2023",
      dataTime: '15:00',
      title: 'Презентация стримингового сервиса DLESS',
      author: 'Проект представят стажёры Декатлона',
      img: 'https://ic.pics.livejournal.com/dain666/1488818/491213/491213_original.png'
    },
    {
      id: 2,
      dataEvent: 31,
      dataMonth: 'Марта',
      dataYear: "2023",
      dataTime: '12:00',
      title: 'Lorem Ipsum',
      author: 'Lorem Ipsum',
      img: 'https://play-lh.googleusercontent.com/5SA-3vo78uGvVrTQ-Or-XrjYMum8r7lAgmGxPHP5aWUidCBUuJbZbny8M2c8NWNJPRo'
    }
  ]

  return (
    <>
      <div className='title'>События</div>
      { event && event.map ((e) => (
        <EventItem
          key={e.id}
          dataEvent={e.dataEvent}
          dataMonth={e.dataMonth}
          dataYear={e.dataYear}
          dataTime={e.dataTime}
          title={e.title}
          author={e.author}
          img={e.img}
        />
      ))}
    </>
  );
}
