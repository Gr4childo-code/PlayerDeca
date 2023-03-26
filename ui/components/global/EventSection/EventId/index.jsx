import React from 'react';

export default function EventId({ events }) {
  const { title, author, place, time } = events[0].attributes;
  return (
    <div>
      {title}
      {author}
      {place}
      {time}
    </div>
  );
}
