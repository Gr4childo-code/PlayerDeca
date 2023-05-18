import { GetSessionParams, getSession } from 'next-auth/react';
// import Layout from '@/src/ui/components/Profile/Layout';

import styles from '@/src/ui/components/Profile/Layout/Profile.module.scss';

const profile = ({ session }: any) => {
  const user = session.user;

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.userInfo}>
          <li className={styles.userInfo__item}>
            {user?.image && (
              <img src={process.env.NEXT_PUBLIC_API_URL + user?.image} />
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
    </>
  );
};

export default profile;

export const getServerSideProps = async (ctx: GetSessionParams | undefined) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
