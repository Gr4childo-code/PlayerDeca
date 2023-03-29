import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

export default function Sidebar() {
  const menuItems = [
    { id: 1, label: 'Main', link: '/profile' },
    { id: 2, label: 'Account', link: '/profile/account' },
    { id: 3, label: 'My playlists', link: '/profile/my-playlists' },
    { id: 4, label: 'Upload', link: '/profile/upload' },
    { id: 5, label: 'Settings', link: '/profile/settings' },
  ];

  return (
    <>
      <ul className={styles.wrapper}>
        {menuItems.map(({ id, label, link }) => {
          return (
            <li>
              <Link key={id} href={link}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
