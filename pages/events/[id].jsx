import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import EventCurrent from '@/ui/components/global/EventSection/EventCurrent';
import { fetchAPI } from '@/utils/api/fetch';
import { mainEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetchAPI(`/events/${mainEvents(id)}`);
  const events = await response.json();
  if (events.data.length == 0) {
    return {
      notFound: true,
    };
  }
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
      <div className='container'>Страничка</div>
    </>
  );
};

export default CurrentEvent;
