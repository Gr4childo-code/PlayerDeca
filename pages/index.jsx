//Next/React
import Head from 'next/head';
import { useState } from 'react';
import Script from 'next/script';

//Components
import Slider from '@/ui/components/global/Slider';
import EventSection from '@/ui/components/global/EventSection';
import Top10 from '@/ui/components/Top10';
import Toast from '@/ui/components/global/Toast';

//Utils
import { fetchAPI } from '@/utils/api/fetch';
import { first10 } from '@/utils/api/QueryParams';
import dataImage1 from '../ui/components/global/Slider/dataImage1';
import dataImage2 from '../ui/components/global/Slider/dataImage2';
import dataImage3 from '../ui/components/global/Slider/dataImage3';

export const getServerSideProps = async () => {
  const response2 = await fetchAPI(`/audios?${first10()}`);
  const audioTop = await response2.json();
  return {
    props: { audioTop },
  };
};

export default function Home({ audioTop }) {
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

      <Script src='https://kit.fontawesome.com/fb72704844.js' />

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
            <Slider images={dataImage2} />
            <Slider images={dataImage1} />
            <Slider images={dataImage3} />
            <EventSection />
          </div>
          <div className='layout__right'>
            <Top10 audioTop={audioTop} />
          </div>
        </div>
      </div>
    </>
  );
}
