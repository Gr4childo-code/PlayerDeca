import { fetchAPI } from '@/utils/api/fetch';
import styles from '../ProfileSettings/Settings.module.scss';
import { useState } from 'react';

export default function ProfileSettings({ id, email, name }) {
  const [newName, setName] = useState('');
  const [newEmail, setEmail] = useState(email);
  const [password, setPassword] = useState('');

  const сhangeName = (e) => {
    setName(e.target.value);
  };
  const сhangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const сhangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.dless.ru/api/auth/users/${id}/change-password`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ password: password }),
      }
    );
    const data = await response.json();
    /* console.log(data); */
  };

  return (
    <>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <p>id пользователя : </p>
        <ul className={styles.settings__list}>
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'text'}
              value={newName}
              placeholder='Изменить имя'
              onChange={сhangeName}
            />
            <button className={styles.settings__button} type={'submit'}>
              Изменить
            </button>
          </li>
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'email'}
              value={newEmail}
              placeholder='Изменить емайл'
              onChange={сhangeEmail}
            />
            <button className={styles.settings__button} type={'submit'}>
              Изменить
            </button>
          </li>
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'password'}
              value={password}
              placeholder='Изменить пароль'
              onChange={сhangePassword}
            />
            <button
              className={styles.settings__button}
              type={'submit'}
              onClick={handleChangePassword}
            >
              Изменить
            </button>
          </li>
        </ul>
        <div>
          <ul className={styles.settings__list}>
            <li>{newName}</li>
            <li>{newEmail}</li>
            <li>{password}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
/* PUT для изменения пароля /api/auth/change-password */
