import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faHouse,
  faSliders,
  faRightFromBracket,
  faTrophy,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

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
    {
      id: 1,
      label: 'Общие',
      icon: <FontAwesomeIcon icon={faHouse} />,
      link: '/profile',
    },
    {
      id: 2,
      label: 'Статистика',
      icon: <FontAwesomeIcon icon={faTrophy} />,
      link: '/profile/account',
    },
    {
      id: 3,
      label: 'Моя коллекция',
      icon: <FontAwesomeIcon icon={faHeart} />,
      link: '/profile/my-playlists',
    },
    {
      id: 4,
      label: 'Настройки',
      icon: <FontAwesomeIcon icon={faSliders} />,
      link: '/profile/settings',
    },
  ];
  return (
    <>
      <ul className={styles.wrapper}>
        {menuItems.map(({ id, label, link, icon }) => {
          return (
            <li key={id}>
              <Link href={link}>
                <p>{label}</p>
                <div className={styles.mobile}>{icon}</div>
              </Link>
            </li>
          );
        })}
        <li>
          <div className={styles.mobile}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
          <button onClick={signOutHandle}>Выйти</button>
        </li>
      </ul>
    </>
  );
}
