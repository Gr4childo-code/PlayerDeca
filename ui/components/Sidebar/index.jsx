import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 1, label: 'Main', link: '/profile' },
  { id: 2, label: 'Account', link: '/account' },
  { id: 3, label: 'My playlists', link: '/my-playlists' },
  { id: 4, label: 'Upload', link: '/upload' },
  { id: 5, label: 'Settings', link: '/settings' },
];

export default function Sidebar() {
  return (
    <>
      <ul className={styles.wrapper}>
        {menuItems.map(({ id, label, link }) => {
          return (
            <Link key={id} href={link}>
              {label} {/* Нужно ли здесь li ? */}
            </Link>
          );
        })}
      </ul>
    </>
  );
}
