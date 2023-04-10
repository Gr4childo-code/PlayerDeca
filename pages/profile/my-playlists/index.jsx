import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { getAudios, getAudiosForUser } from '@/api';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const userId = session.user.id;
  const username = session.user.username;
  const token = session.jwt;

  const test = await getAudios();

  return {
    props: { userId, token, username, test },
  };
};

export default function MyPlaylists({ username, test }) {
  console.log(username, test);
  return (
    <Layout>
      <div className='collectionPlaylists'>
        <div>
          <ProfileUpload />
        </div>
        <div>{/* Сюда нужно плейлисты пользователя */}</div>
      </div>
    </Layout>
  );
}
