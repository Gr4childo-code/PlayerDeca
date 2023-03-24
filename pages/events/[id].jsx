import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import EventSection from '@/ui/components/global/EventSection';

import { dataEvents } from '@/utils/api/QueryParams';

import { fetchAPI } from '@/utils/api/fetch';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  return {
    props: { events },
  };
};

const CurrentEvent = ({ events }) => {
  const { data } = events;

  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/fb72704844.js' />
      <div className='container'>
        <EventSection events={data} />
      </div>
    </>
  );
};

export default CurrentEvent;
