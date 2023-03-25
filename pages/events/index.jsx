import React from 'react';
import { Event } from '@/ui/components/global/EventSection/Event';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  return {
    props: { events },
  };
};

export default function AllEvents({ events }) {
  return (
    <>
      <div className='title'>События</div>
      {events.data?.map(({ id, attributes }, index) => (
        <Event key={id} attributes={attributes} index={index + 1} />
      ))}
    </>
  );
}
