import React from 'react';
import Link from 'next/link';

import styles from './Sidebar.module.scss';

const menuItems = [
  { id: 1, label: 'Главная', link: '/profile' },
  { id: 2, label: 'Аккаунт', link: '/account' },
  { id: 3, label: 'Мои подборки', link: '/my-playlists' },
  { id: 4, label: 'Загрузить', link: '/upload' },
  { id: 5, label: 'Настройки', link: '/settings' },
];

export default function Sidebar() {
  return (
    <div>
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
    </div>
  );
}
