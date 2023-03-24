import React from 'react';
import { EventItem } from './EventItem';

export default function EventSection({ events }) {
  return (
    <>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => {
        <EventItem id={id} attributes={attributes} index={index} />;
        console.log(id, attributes, index);
      })}
    </>
  );
}
/* title,place,date,time,author, poster */
