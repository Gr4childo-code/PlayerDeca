import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Statistics from '@/ui/components/Sidebar/Statistics';
import Contacts from '@/ui/components/Sidebar/Contacts';

export default function Account() {
  return (
    <Layout>
      <Statistics
        liked={324}
        favoriteAuthor={95}
        listened={878}
        playlists={8}
      />
      <Contacts email={'admin@gmail.com'} phoneNum={'+7 (800) 080-08-08'} />
    </Layout>
  );
}
