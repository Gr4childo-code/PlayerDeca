import { signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Layout from '@/ui/components/Sidebar/Layout';

import styles from '../../ui/components/Sidebar/Layout/Profile.module.scss';

const profile = ({ session }) => {
  const router = useRouter();
  const user = session.user

  const signOutHandle = async () => {
    const { url } = await signOut({
      redirect: false,
      callbackUrl: '/auth/login',
    });

    router.push(url);
  };

  return (
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
            <button onClick={signOutHandle}>Log out</button>
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
      session: await getSession(ctx)
    }
  }
}
