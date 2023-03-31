import { signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '@/ui/components/Sidebar/Layout';

import styles from '../../ui/components/Sidebar/Layout/Profile.module.scss';

const profile = ({ session }) => {
  const router = useRouter();
  const user = session.user;
  const customLoader = () => {
    return `https://api.dless.ru${user?.image}`;
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <ul className={styles.userInfo}>
          <li className={styles.userInfo__item}>
            {user?.image && (
              <Image
                src='profilePic.webp'
                width={300}
                height={300}
                alt='User profile picture'
                quality={10}
                loader={customLoader}
              />
            )}
          </li>
          <li className={styles.userInfo__item}>
            <p className={styles.userInfo__title}>Name:</p>
            <p className={styles.userInfo__descr}>{user?.name}</p>
          </li>

          <li className={styles.userInfo__item}>
            <p className={styles.userInfo__title}>Username:</p>
            <p className={styles.userInfo__descr}>{user?.username}</p>
          </li>
          <li className={styles.userInfo__item}>
            <p className={styles.userInfo__title}>Email:</p>
            <p className={styles.userInfo__descr}>{user?.email}</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default profile;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
