import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Playlist_Page from '@/ui/components/Playlist_Page';
import { fetchAPI } from '@/utils/api/fetch';
import { playlistID } from '@/utils/api/QueryParams';

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetchAPI(`/playlists?${playlistID(id)}`);
  const list = await response.json();
  if (list.data.length == 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: { list },
  };
};

const Details = ({ list }) => {
  const { data } = list;

  return (
    <>
      <Head>
        <meta name='description' content='Decathlon lessons project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script src='https://kit.fontawesome.com/fb72704844.js' />
      <div className='container'>
        <Playlist_Page playlist={data} />
      </div>
    </>
  );
};

export default Details;
