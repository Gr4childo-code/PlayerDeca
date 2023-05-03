import React from 'react';

import Logo from '@/ui/components/global/Logo';
import AuthBadge from '@/ui/components/global/AuthBadge';
import SearchNew from '@/ui/components/global/SearchNew';

import styles from './Header.module.scss';

const Header = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__box}>
          <div className={styles.header__left}>
            <Logo />
          </div>
          <div className={styles.header__center}>
            <SearchNew />
          </div>
          <div className={styles.header__right}>
            <AuthBadge />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
