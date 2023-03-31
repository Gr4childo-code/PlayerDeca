import { fetchAPI } from '@/utils/api/fetch';
import styles from '../ProfileSettings/Settings.module.scss';
import { useState } from 'react';

export default function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://api.dless.ru/api/auth/change-password',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ password }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <p>id пользователя : </p>
        <form onSubmit={handleSubmit}>
          <ul className={styles.settings__list}>
            <li className={styles.settings__item}>
              <input
                type={'text'}
                value={name}
                placeholder='Изменить имя'
                onChange={сhangeName}
              />
            </li>
            <li className={styles.settings__item}>
              <input
                type={'email'}
                value={email}
                placeholder='Изменить емайл'
                onChange={сhangeEmail}
              />
            </li>
            <li className={styles.settings__item}>
              <input
                type={'password'}
                value={password}
                placeholder='Изменить пароль'
                onChange={сhangePassword}
              />
            </li>
          </ul>
          <button className={styles.settings__button} type={'submit'}>
            Изменить
          </button>
        </form>
        <div>
          <ul className={styles.settings__list}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{password}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
