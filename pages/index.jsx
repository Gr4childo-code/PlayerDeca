//Next/React
import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';

//Components
import Slider from '@/ui/components/global/Slider';
import Top10 from '@/ui/components/Top10';
import Toast from '@/ui/components/global/Toast';
import Events from './events';

//Utils
import { fetchAPI } from '@/utils/api/fetch';
import { first10, playlistNew, dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const response2 = await fetchAPI(`/audios?${first10()}`);
  const audioTop = await response2.json();

  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  const response3 = await fetchAPI(`/playlists?${playlistNew()}`);
  const playlists = await response3.json();
  return {
    props: { audioTop, playlists, events },
  };
};

export default function Home({ audioTop, playlists, events }) {
  const [list, setList] = useState([]);
  let toastItem = null;

  const showToast = ({ type, title, description }) => {
    toastItem = {
      id: list.length + 1,
      type,
      title,
      description,
    };
    setList([...list, toastItem]);
  };

  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Toast toastlist={list} setList={setList} />
      {/* <button
        onClick={() => {
          showToast({
            type: 'error',
            title: 'Error',
            description: 'API has been deleted',
          });
        }}>
        Error
      </button>
      <button
        onClick={() => {
          showToast({
            type: 'warn',
            title: 'Warn',
            description: 'Type password',
          });
        }}>
        Warn
      </button>
      <button
        onClick={() => {
          showToast({
            type: 'success',
            title: 'Success',
            description: 'Complete',
          });
        }}>
        Success
      </button> */}
      <div className='container'>
        <div className='layout'>
          <div className='layout__left'>
            {/* <Slider
              data={dataSlider3}
              pagination={true}
              filter={'gradient'}
              buttons={false}
              title={'Новые плейлисты'}
            /> */}
            <Slider
              data={playlists.data}
              pagination={true}
              filter={'blur'}
              title={'Плейлисты пользователей'}
            />
            <Events events={events} />
          </div>
          <div className='layout__right'>
            <Top10 audioTop={audioTop} />
          </div>
        </div>
      </div>
    </>
  );
}
