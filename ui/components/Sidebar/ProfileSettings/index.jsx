import { fetchAPI } from '@/utils/api/fetch';
import styles from '../ProfileSettings/Settings.module.scss';
import { useState } from 'react';

export default function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'https://api.dless.ru/api/auth/change-password',
      {
        method: 'POST',
        headers: {
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
        <form onSubmit={handleSubmit}>
          <ul className={styles.settings__list}>
            <li>
              <p>Изменить имя</p>
              <input
                type={'text'}
                value={name}
                placeholder='имя'
                onChange={handleChangeName}
              />
              <button type={'submit'} className={styles.settings__button}>
                Изменить
              </button>
            </li>
            <li>
              <p>Изменить емайл</p>
              <input
                type={'email'}
                value={email}
                placeholder='емайл'
                onChange={handleChangeEmail}
              />
              <button type={'submit'} className={styles.settings__button}>
                Изменить
              </button>
            </li>
            <li>
              <p>Изменить пароль</p>
              <input
                type={'password'}
                value={password}
                placeholder='пароль'
                onChange={handleChangePassword}
              />
              <button type={'submit'} className={styles.settings__button}>
                Изменить
              </button>
            </li>
          </ul>
          <ul className={styles.settings__list}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{password}</li>
          </ul>
        </form>
      </div>
    </>
  );
}
