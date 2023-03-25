import React from 'react';
import Link from 'next/link';
import { EventInfo } from '@/ui/components/global/EventSection/EventInfo';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  return {
    props: { events },
  };
};

export default function Events({ events }) {
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
