import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';

export default function Settings() {
  return (
    <Layout>
      <h2>Управление данными</h2>
      <ul>
        <li>Изменить имя</li>
        <li>Изменить Username </li>
        <li>Изменить Email </li>
      </ul>
    </Layout>
  );
}
