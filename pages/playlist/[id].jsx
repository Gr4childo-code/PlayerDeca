import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Playlist_Page from '@/ui/components/Playlist_Page';

const Details = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/fb72704844.js' />
      <Playlist_Page />
    </>
  );
};

export default Details;
