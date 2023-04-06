import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';
import { getSession } from 'next-auth/react';
import { getAudios } from '@/api';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const userId = session.user.id;
  const token = session.jwt;

  const audios = await getAudios();

  return {
    props: { userId, token, audios },
  };
};

export default function MyPlaylists({ audios }) {
  return (
    <Layout>
      <h3>Моя коллекция</h3>
      <div className='collectionPlaylists'>
        <div>
          <ProfileUpload audios={audios} />
        </div>
        <div>Сюда нужно плейлисты пользователя</div>
      </div>
    </Layout>
  );
}
