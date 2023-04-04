import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Playlists from '@/ui/components/Sidebar/Playlists';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { fetchAPI } from '@/utils/api/fetch';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  const token = session.jwt;

  const playlistsUser = await fetch(
    `https://api.dless.ru/api/playlists/${user.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const playlists = await playlistsUser.json();

  return {
    props: { user, playlists, token },
  };
};

export default function MyPlaylists({ user, playlists }) {
  return (
    <Layout>
      <Playlists playlists={playlists} />
      <ProfileUpload />
    </Layout>
  );
}
