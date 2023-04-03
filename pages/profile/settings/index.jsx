import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import ProfileSettings from '@/ui/components/Sidebar/ProfileSettings';
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  const jwtToken = session.jwt;
  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user, jwtToken },
  };
};

export default function SettingsPage({ user, jwtToken }) {
  return (
    <>
      <Layout>
        <ProfileSettings user={user} token={jwtToken} />
      </Layout>
    </>
  );
}

/* {"id":5,"username":"akosou94","email":"aleksey.kosourov@decathlon.com","provider":"local","confirmed":true,"blocked":false,"name":null,"image"} */
