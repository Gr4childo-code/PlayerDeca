import { signOut } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '@/ui/components/Sidebar/Layout';
import Image from 'next/image';

import styles from '../ui/components/Sidebar/Layout/Profile.module.scss';

export const getServerSideProps = async (context) => {
  const sessionServer = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!sessionServer) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionServer,
    },
  };
};

const profile = ({ sessionServer }) => {
  const router = useRouter();
  const [user] = useState(sessionServer?.user);

  const handle = async () => {
    const { url } = await signOut({
      redirect: false,
      callbackUrl: '/',
    });

    router.push(url);
  };

  return (
    <>
      <Layout>
        <Image width={120} height={120} />
        <ul className={styles.userInfo}>
          <li className={styles.userInfo__item}>
            Name: {user.name ? user.name : 'Не указано'}
          </li>
          <li className={styles.userInfo__item}>Username: {user.username}</li>
          <li className={styles.userInfo__item}>Email: {user.email}</li>
        </ul>
      </Layout>
      <button onClick={handle}>Log out</button>
    </>
  );
};

export default profile;
