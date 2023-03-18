import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 1, label: 'Аккаунт', link: '/account' },
  { id: 2, label: 'Мои подборки / Загрузить', link: '/my-playlists' },
  { id: 3, label: 'Настройки', link: '/settings' },
];

export default function Sidebar() {
  return (
    <div>
      <ul className={styles.list}>
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
