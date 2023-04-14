import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import DragAndDrop from '@/ui/components/Sidebar/ProfileUpload';

export default function UserCollection() {
  return (
    <Layout>
      <div>
        <DragAndDrop />
      </div>
      <div>{/* Сюда нужно плейлисты пользователя */}</div>
    </Layout>
  );
}
