import React from 'react';
import EventsAll from '@/ui/components/global/EventSection/EventsAll';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

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
