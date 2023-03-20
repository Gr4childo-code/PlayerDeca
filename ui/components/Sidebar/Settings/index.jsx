import React, from 'react';
import Switch from '../Switch';

import styles from '../Settings/Settings.module.scss';

export default function Settings() {
  return (
    <>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <ul className={styles.settings__list}>
          <li className={styles.settings__item}>Воспроизводить бесконечно <Switch /></li>
          <li className={styles.settings__item}>
            Воспроизводить автоматически <Switch />
          </li>
          <li className={styles.settings__item}>Погладить кота <Switch /></li>
          <li className={styles.settings__item}>Не гладить кота <Switch /></li>
          <li className={styles.settings__item}>Что за настройка? <Switch /></li>
        </ul>
      </div>
    </>
  );
}
