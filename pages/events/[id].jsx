import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import EventId from '@/ui/components/DlessEvents/EventId';

//utils
import { getEventsId } from '@/api';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const events = await getEventsId(id);

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
