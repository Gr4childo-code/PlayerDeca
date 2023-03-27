import React from 'react';
import EventsAll from '@/ui/components/DlessEvents/EventsAll';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responce = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responce.json();

  return {
    props: { events },
  };
};

export default function EventsPage({ events }) {
  return (
    <div>
      <EventsAll events={events} />
    </div>
  );
}
