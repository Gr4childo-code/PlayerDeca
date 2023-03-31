import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { signOut } from 'next-auth/react';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const router = useRouter();

  const signOutHandle = async () => {
    const { url } = await signOut({
      redirect: false,
      callbackUrl: '/auth/login',
    });

    router.push(url);
  };
  const menuItems = [
    { id: 1, label: 'Общие', link: '/profile' },
    { id: 2, label: 'Статистика', link: '/profile/account' },
    { id: 3, label: 'Моя коллекция', link: '/profile/my-playlists' },
    { id: 4, label: 'Настройки', link: '/profile/settings' },
  ];
  return (
    <>
      <ul className={styles.wrapper}>
        {menuItems.map(({ id, label, link }) => {
          return (
            <li key={id}>
              <Link href={link}>{label}</Link>
            </li>
          );
        })}
        <li>
          <button onClick={signOutHandle}>Log out</button>
        </li>
      </ul>
    </>
  );
}
