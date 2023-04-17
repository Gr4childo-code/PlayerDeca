import React from 'react';
import Head from 'next/head';
import AllAudios_Page from '@/ui/components/AllAudios_Page';
import { getAudiosAll } from '@/api';

const allAudios = ({ audios }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <AllAudios_Page audios={audios} />
      </div>
    </>
  );
};
export default allAudios;

export const getServerSideProps = async () => {
  const audios = await getAudiosAll();

  return {
    props: { audios },
  };
};
