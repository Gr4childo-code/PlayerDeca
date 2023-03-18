import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 1, label: 'Аккаунт', link: '/account' },
  { id: 2, label: 'Мои подборки', link: '/my-playlists' },
  { id: 3, label: 'Загрузить', link: '/upload' },
  { id: 4, label: 'Настройки', link: '/settings' },
];

export default function Sidebar() {
  return (
    <div>
      <ul className={styles.wrapper}>
        {menuItems.map(({ id, label, link }) => {
          return (
            <Link key={id} href={link}>
              {label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
