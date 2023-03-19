import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Statistics from '@/ui/components/Sidebar/Statistics';
import Contacts from '@/ui/components/Sidebar/Contacts';

export default function Account() {
  return (
    <Layout>
      <Statistics />
      <Contacts />
    </Layout>
  );
}
