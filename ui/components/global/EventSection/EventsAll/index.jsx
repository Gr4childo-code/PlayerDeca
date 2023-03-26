import React from 'react';
import Link from 'next/link';
import { EventInfo } from '@/ui/components/global/EventSection/EventInfo';

export default function EventsAll({ events }) {
  const { data } = events;

  return (
    <div className='container'>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => (
        <ul>
          <li key={id}>
            <EventInfo id={id} index={index + 1} attributes={attributes} />
          </li>
        </ul>
      ))}
    </div>
  );
}
