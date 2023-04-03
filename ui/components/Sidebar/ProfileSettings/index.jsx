import React, { useState } from 'react';

import styles from '../../Sidebar/ProfileSettings/Settings.module.scss';

export default function ProfileSettings({ user, token }) {
  const { id, username, name, email } = user;
  const [currentUser, setNewUser] = useState(user);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  /*   console.log(currentUser);
  console.log(token); */

  const updatePassword = async () => {
    const response = await fetch(
      'https://api.dless.ru/api/auth/change-password',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}
`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: currentPassword,
          password: password,
          passwordConfirmation: passwordConfirmation,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <h3>Информация о профиле</h3>
          <ul className={styles.settings__list}>
            <li className={styles.settings__item}>id: {id}</li>
            <li className={styles.settings__item}>Никнейм: {username}</li>
            <li className={styles.settings__item}>
              Имя: {name || 'Нет имени'}
            </li>
            <li className={styles.settings__item}>Email: {email}</li>
          </ul>
        </div>
        <ul className={styles.settings__list}>
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'text'}
              value={newName}
              placeholder='Изменить имя'
              onChange={(e) => setNewName(e.target.value)}
            />
            {/* <button
              onClick={updateName}
              className={styles.settings__button}
              type={'submit'}
            >
              Изменить
            </button> */}
          </li>
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'email'}
              value={newEmail}
              placeholder='Изменить емайл'
              onChange={(e) => setNewEmail(e.target.value)}
            />
            {/* <button className={styles.settings__button} type={'submit'}>
              Изменить
            </button> */}
          </li>
        </ul>
        <div className={styles.password}>
          <h3>Изменить пароль</h3>
          <ul className={styles.settings__list}>
            <li className={styles.settings__item}>
              <input
                className={styles.settings__input}
                type={'password'}
                value={currentPassword}
                placeholder='Старый пароль'
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </li>
            <li className={styles.settings__item}>
              <input
                className={styles.settings__input}
                type={'password'}
                value={password}
                placeholder='Новый пароль'
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li className={styles.settings__item}>
              <input
                className={styles.settings__input}
                type={'password'}
                value={passwordConfirmation}
                placeholder='Подтвердите новый пароль'
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <button
                onClick={updatePassword}
                className={styles.settings__button}
                type={'submit'}
              >
                Изменить
              </button>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.settings__list}>
            <li>{newName}</li>
            {/* <li>{newEmail}</li> */}
            <li>{password}</li>
            <li>{passwordConfirmation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
