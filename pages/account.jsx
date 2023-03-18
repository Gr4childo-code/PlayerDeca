import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';

export default function Account() {
  return (
    <Layout>
      Информация об аккаунте
      <ul>
        <li>Имя: </li>
        <li>Username: </li>
        <li>Email: </li>
      </ul>
    </Layout>
  );
}
