import React from 'react';
import Link from 'next/link';

import styles from '@/ui/components/global/Navigation/Navigation.module.scss';

export default function Navigation(props) {
  const handleMove = () => {
    //сюда надо функцию при наведении мыши будет показываться компонент
  };

  return (
    <>
      <nav className={styles.navMain}>
        <ul className={styles.navMain_list}>
          <li className={styles.navMain_item}>
            <Link href='/#'>Music</Link>
          </li>
          <li className={styles.navMain_item}>
            <Link href='/#'>Top charts</Link>
          </li>
          <li className={styles.navMain_item}>
            <Link href='/#'>My playlists</Link>
          </li>
          <li className={styles.navMain_item}>
            <Link href='/#'>Download</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navMain_link}>
        <Link href='/signin'>Войти</Link>
        <Link href='/signup'>Регистрация</Link>
      </div>
    </>
  );
}
