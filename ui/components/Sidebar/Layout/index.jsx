import React, { useState } from 'react';
import Sidebar from '..';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  const [isActive, setIsActive] = useState(true);

  const sideBarActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='container'>
      <div className={styles.profile}>
        <div className={styles.profile__menu}>
          <button
            className={styles.profile__button}
            onMouseEnter={sideBarActive}></button>
          {isActive && <Sidebar />}
        </div>
        <div className={styles.profile__content}>{children}</div>
      </div>
    </div>
  );
}
