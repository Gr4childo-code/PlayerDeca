import React from 'react';
import { getSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import Settings from '@/ui/components/Sidebar/ProfileSettings';
import { fetchAPI } from '@/utils/api/fetch';
import { dataUserId } from '@/utils/api/QueryParams';

const editProfile = ({ session }) => {
  const user = session.user;

  return (
    <Layout>
      <div>
        {user.name}
        {user.email}
      </div>
    </Layout>
  );
};
export default editProfile;

/* export const getServerSideProps = async () => {
  const response = await fetchAPI(`/users?${dataUserId}`);
  const data = await response.json();
  return { props: { data } };
};
 */
/* export default function ProfileSettings({ data }) {
  const { id, email, name } = data[2];
    console.log(data);
   console.log(id);
  console.log(email);

  return (
    <Layout>
      <Settings id={id} email={email} name={name} />
    </Layout>
  );
} */

/* PUT для изменения пароля /api/auth/change-password */
