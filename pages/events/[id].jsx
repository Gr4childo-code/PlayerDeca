import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import EventId from '@/ui/components/global/EventSection/EventId';

//utils
import { fetchAPI } from '@/utils/api/fetch';
import { dataEventsId } from '@/utils/api/QueryParams';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const responce = await fetchAPI(`/events?${dataEventsId(id)}`);
  const events = await responce.json();
  console.log(events);

  return {
    props: { events },
  };
};

const EventCurrentId = ({ events }) => {
  const { data } = events;

  return (
    <div>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/fb72704844.js' />
      <div className='container'>
        <EventId events={data} />
      </div>
    </div>
  );
};

export default EventCurrentId;
