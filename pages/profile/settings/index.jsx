import React from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Settings from '@/ui/components/Sidebar/ProfileSettings';
import { fetchAPI } from '@/utils/api/fetch';
import { dataUserId } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const response = await fetchAPI(`/users?${dataUserId}`);
  const data = await response.json();
  return { props: { data } };
};

export default function ProfileSettings({ data }) {
  console.log(data);

  return (
    <Layout>
      <Settings />
    </Layout>
  );
}

/* PUT для изменения пароля /api/auth/change-password */
