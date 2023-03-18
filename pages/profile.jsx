import { signOut } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '@/ui/components/Sidebar/Layout';

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
        <div>
          <ul className={styles.userStat__list}>
            <li className={styles.userStat__item}>
              <p className={styles.userStat__title}>Liked</p>
              <span>33</span>
            </li>
            <li className={styles.userStat__item}>
              <p className={styles.userStat__title}>Listened</p>
              <span>476 ч</span>
            </li>
            <li className={styles.userStat__item}>
              <p className={styles.userStat__title}>Created playlists</p>
              <span>8</span>
            </li>
          </ul>
        </div>
        <ul className={styles.userInfo}>
          <li>Name: {user.name ? user.name : 'Не указано'}</li>
          <li>Username: {user.username}</li>
          <li>Country: Россия</li>
        </ul>
      </Layout>
      <button onClick={handle}>Log out</button>
    </>
  );
};

export default profile;
