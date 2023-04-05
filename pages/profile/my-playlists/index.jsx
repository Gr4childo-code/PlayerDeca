import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Playlists from '@/ui/components/Sidebar/Playlists';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { fetchAPI } from '@/utils/api/fetch';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const userId = session.user.id;
  const token = session.jwt;

  const playlistsUser = await fetch(`https://api.dless.ru/api/playlists?`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const playlists = await playlistsUser.json();

  return {
    props: { userId, token, playlists },
  };
};

export default function MyPlaylists({ userId, playlists }) {
  console.log(playlists);
  return (
    <Layout>
      <h3>Моя коллекция</h3>
      <div className='collectionPlaylists'>
        <div>
          <ProfileUpload />
        </div>
        <div>
          <Playlists userId={userId} playlists={playlists} />
        </div>
      </div>
    </Layout>
  );
}
