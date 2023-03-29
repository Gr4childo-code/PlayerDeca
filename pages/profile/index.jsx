import { signOut } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '@/ui/components/Sidebar/Layout';

import styles from '../../ui/components/Sidebar/Layout/Profile.module.scss';

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
        <div className={styles.wrapper}>
          <ul className={styles.userInfo}>
            <li className={styles.userInfo__item}>
              <p className={styles.userInfo__title}>Name:</p>
              <p className={styles.userInfo__descr}>
                {user?.name ? user.name : 'Не указано'}
              </p>
            </li>
            <li className={styles.userInfo__item}>
              <p className={styles.userInfo__title}>Username:</p>
              <p className={styles.userInfo__descr}>{user?.username}</p>
            </li>
            <li className={styles.userInfo__item}>
              <p className={styles.userInfo__title}>Email:</p>
              <p className={styles.userInfo__descr}>{user?.email}</p>
            </li>
            <li className={styles.userInfo__item}>
              <button onClick={handle}>Log out</button>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async ({req, res}) => {
  const sessionServer = await getServerSession(req, res, authOptions);

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
      // sessionServer,
    },
  };
};

export default profile;
