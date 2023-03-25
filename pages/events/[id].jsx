import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { EventInfo } from '@/ui/components/global/EventSection/EventInfo';

//utils
import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const responceEvents = await fetchAPI(`/events/${id}`);
  const data = await responceEvents.json();

  return {
    props: { event: data },
  };
};

const EventCurr = ({ event }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/fb72704844.js' />
      <div className='container'>
        <EventInfo event={event} />
      </div>
    </>
  );
};

export default EventCurr;
