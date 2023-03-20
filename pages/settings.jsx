import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Settings from '@/ui/components/Sidebar/Settings';

export default function ProfileSettings() {
  return (
    <Layout>
      <Settings
        username={'userName'}
        useremail={'userEmail'}
        userpassword={'userPassword'}
      />
    </Layout>
  );
}
