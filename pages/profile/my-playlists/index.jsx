import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import ProfileUpload from '@/ui/components/Sidebar/ProfileUpload';

export default function MyPlaylists() {
  return (
    <Layout>
      <div className='collectionPlaylists'>
        <div>
          <ProfileUpload />
        </div>
        <div>Сюда нужно плейлисты пользователя</div>
      </div>
    </Layout>
  );
}
