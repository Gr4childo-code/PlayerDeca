import React, { useState } from 'react';
import Link from 'next/link'
import Search from '@/ui/components/global/Search';

import styles from '@/ui/components/global/Navigation/Navigation.module.scss';

export default function Navigation() {
  const [isNav, setIsNav] = useState(false)
  const [list] = useState([
    { id: 1, name: '140 / Deep Dubstep / Grime', href: '/' },
    { id: 2, name: 'Afro House', href: '/' },
    { id: 3, name: 'Amapiano', href: '/' },
    { id: 4, name: 'Bass / Club', href: '/' },
    { id: 5, name: 'Bass House', href: '/' },
    { id: 6, name: 'Breaks / Breakbeat / UK Bass', href: '/' },
    { id: 7, name: 'Dance / Electro POP', href: '/' },
    { id: 8, name: 'Deep House', href: '/' },
    { id: 9, name: 'DJ Tools', href: '/' },
    { id: 10, name: 'Drum & Bass', href: '/' },
    { id: 11, name: 'Dubstep', href: '/' },
    { id: 12, name: 'Electro (Classic / Detroit / Modern)', href: '/' },
    { id: 13, name: 'Ekectronica', href: '/' },
    { id: 14, name: 'Funky House', href: '/' },
    { id: 15, name: 'Hard Dance / Hardcore', href: '/' },
    { id: 16, name: 'Hard Techno', href: '/' },
    { id: 17, name: 'House', href: '/' },
    { id: 18, name: 'Indie Dance', href: '/' },
    { id: 19, name: 'Jackin House', href: '/' },
    { id: 20, name: 'Mainstage', href: '/' },
    { id: 21, name: 'Melodic House & Techno', href: '/' },
    { id: 22, name: 'Minimal / Deep Tech', href: '/' },
    { id: 23, name: 'NU Disco / Disco', href: '/' },
    { id: 24, name: 'Organic House / Downtempo', href: '/' },
    { id: 25, name: 'Progressive House', href: '/' },
    { id: 26, name: 'Psy-Trance', href: '/' },
    { id: 27, name: 'Tech House', href: '/' },
    { id: 28, name: 'Techno (Peak Time / Driving)', href: '/' },
    { id: 29, name: 'Techno (Raw / Deep / Hypnotic)', href: '/' },
    { id: 30, name: 'Trance', href: '/' },
    { id: 31, name: 'Trap / Wave', href: '/' },
    { id: 32, name: 'UK garage / Bassline', href: '/' }
  ])

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__btn} onClick={() => setIsNav(!isNav)}></div>
        <div className={`${styles.nav__box} ${isNav ? styles.nav__box_active : ''}`}>
          {list && list.map(({ id, name, href }) => (
            <Link href={href} key={id} className={styles.nav__link}>
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* <Search /> */}
    </>
  );
}
