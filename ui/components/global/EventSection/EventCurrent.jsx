import React from 'react';

export default function EventCurrent({ events }) {
  const { title, author, date } = events[0].attributes;

  console.log(title, 'Нужный заголовок');

  return <div>EventCurrent</div>;
}
