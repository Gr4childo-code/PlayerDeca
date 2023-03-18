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
        <ul className={styles.userInfo__list}>
          <li>Имя: {user.name ? user.name : 'Не указано'}</li>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
        <ul className={styles.userInfo__list}>
          <li className={styles.userInfo__item}>
            <h3>Песен нравится </h3>
            <span>33</span>
          </li>
          <li className={styles.userInfo__item}>
            <h3>Прослушал в минутах</h3>
            <span>476</span>
          </li>
          <li className={styles.userInfo__item}>
            <h3>Создал плейлистов</h3>
            <span>8</span>
          </li>
        </ul>
      </Layout>
      <button onClick={handle}>Log out</button>
    </>
  );
};

export default profile;
