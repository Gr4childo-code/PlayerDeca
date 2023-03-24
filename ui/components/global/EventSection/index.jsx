import React from 'react';
import { EventItem } from './EventItem';
import styles from '@/ui/components/global/EventSection/EventSection.module.scss';

export default function EventSection({ events }) {
  return (
    <>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => (
        <EventItem key={id} attributes={attributes} index={index + 1} />
      ))}
    </>
  );
}
/* title,place,date,time,author, poster */
