import { useEffect } from 'react'

//Next/React
import Head from 'next/head';

//Components
import SliderEvents from '@/ui/components/global/Slider/SliderEvents';
import SliderPlaylists from '@/ui/components/global/Slider/SliderPlaylists';

import Top10 from '@/ui/components/Top10';
import EventsAll from '@/ui/components/DlessEvents/EventsAll';

//Utils
import { fetchAPI } from '@/utils/api/fetch';
import { first10, playlistNew, dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const first10Resp = await fetchAPI(`/audios?${first10()}`);
  const audioTop = await first10Resp.json();

  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  const playlistNewResp = await fetchAPI(`/playlists?${playlistNew()}`);
  const playlists = await playlistNewResp.json();
  return {
    props: { audioTop, playlists, events },
  };
};

export default function Home({ audioTop, playlists, events }) {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <div className='layout'>
          <div className='layout__left'>
            <div className='title'>События DLESS</div>
            <SliderEvents events={events} buttons={true} pagination={true} />
            <div className='title'>Новинки от пользователей</div>
            <SliderPlaylists
              playlists={playlists}
              buttons={false}
              pagination={true}
            />
            <EventsAll events={events} />
          </div>
          <div className='layout__right'>
            <Top10 audioTop={audioTop} />
          </div>
        </div>
      </div>
    </>
  );
}
