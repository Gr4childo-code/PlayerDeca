import React from 'react';
import Link from 'next/link';
import { Event } from '@/ui/components/global/EventSection/EventInfo';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events`);
  const data = await responceEvents.json();

  return {
    props: { events: data },
  };
};

export default function Events(events) {
  return (
    <>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => (
        <li key={id}>
          <Link
            href={`/events/${id}`}
            /* 
          attributes={attributes}
          index={index + 1} */
          >
            Здесь событие {id} его атрибуты {attributes}
            <br />
            <br />
            <br />
          </Link>
        </li>
      ))}
    </>
  );
}
