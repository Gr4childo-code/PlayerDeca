import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { getAudios } from '@/api';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const userId = session.user.id;
  const token = session.jwt;

  return {
    props: { userId, token },
  };
};

export default function MyPlaylists() {
  return (
    <Layout>
      <h3>Моя коллекция</h3>
      <div className='collectionPlaylists'>
        <div>
          <ProfileUpload />
        </div>
        <div>Сюда нужно плейлисты пользователя</div>
      </div>
    </Layout>
  );
}
