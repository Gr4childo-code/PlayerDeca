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

  const playlistsUser = await fetch(
    `https://api.dless.ru/api/playlists?${userId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const playlist = await playlistsUser.json();

  return {
    props: { userId, token, playlist },
  };
};

export default function MyPlaylists({ userId, playlist }) {
  console.log(playlist);
  return (
    <Layout>
      <Playlists userId={userId} />
      <ProfileUpload />
    </Layout>
  );
}
