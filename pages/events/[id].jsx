import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { EventInfo } from '@/ui/components/global/EventSection/EventInfo';

//utils
import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const responce = await fetchAPI(`/events?${dataEvents(id)}`);
  const events = await responce.json();

  return {
    props: { events },
  };
};

const EventCurr = ({ events }) => {
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
        <EventInfo event={data} />
      </div>
    </div>
  );
};

export default EventCurr;
