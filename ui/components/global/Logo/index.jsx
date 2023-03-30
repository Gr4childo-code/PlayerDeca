import Link from 'next/link';

import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link href='/' className={styles.logo}>
      <div className={styles.logo__title}>
        <span>d</span>
        less
      </div>
    </Link>
  );
}
