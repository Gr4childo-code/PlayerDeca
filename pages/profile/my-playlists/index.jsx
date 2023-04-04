import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Playlists from '@/ui/components/Sidebar/Playlists';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { fetchAPI } from '@/utils/api/fetch';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;

  const playlistsUser = await fetchAPI(`/playlists?${user.username}`);
  const playlists = await playlistsUser.json();

  return {
    props: { user, playlists },
  };
};

export default function MyPlaylists({ user, playlists }) {
  console.log(/* user, */ playlists);

  const { data } = playlists;
  console.log(data);

  return (
    <Layout>
      <Playlists playlists={playlists} />
      <ProfileUpload />
    </Layout>
  );
}
