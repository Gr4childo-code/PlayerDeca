import React from 'react';
import { EventInfo } from '@/ui/components/DlessEvents/EventsInfo';

export default function EventsAll({ events }) {
  return (
    <div className='container'>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => (
        <ul key={id}>
          <li>
            <EventInfo id={id} index={index + 1} attributes={attributes} />
          </li>
        </ul>
      ))}
    </div>
  );
}
