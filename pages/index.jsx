import Head from 'next/head';
import Script from 'next/script';
import { fetchAPI } from '@/utils/api/fetch';
import Player from '@/ui/components/global/Player';
import Slider from '@/ui/components/global/Slider';
import { useEffect, useState } from 'react';
import EventSection from '@/ui/components/global/EventSection';

import Top10 from '@/ui/components/Top10';
import { first10 } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const response = await fetchAPI('/audios?sort=id:desc'); // /audios?sort=id:desc&pagination[limit]=25
  const audios = await response.json();

  const response2 = await fetchAPI(`/audios?${first10()}`);
  const audioTop = await response2.json();
  return {
    props: { audios, audioTop },
  };
};

export default function Home({ audios, audioTop }) {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Script src='https://kit.fontawesome.com/fb72704844.js' />

      <div className='container'>
        <div className='layout'>
          <div className='layout__left'>
            <Slider />
            <EventSection />
          </div>
          <div className='layout__right'>
            <Top10 audioTop={audioTop} />
          </div>
        </div>
      </div>

      {audios && <Player audios={audios} />}
    </>
  );
}
