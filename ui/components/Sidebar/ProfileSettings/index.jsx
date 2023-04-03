import React, { useState } from 'react';

import styles from '../../Sidebar/ProfileSettings/Settings.module.scss';

export default function ProfileSettings({ user, token }) {
  const { id, username, name, email } = user;
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validatePassword = (password) => {
    const passwordRegEx = /(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,20}/g;
    if (password === passwordConfirmation && password !== currentPassword) {
      console.log('Password is valid');
      return passwordRegEx.test(password);
    } else {
      alert('Password is invalid or matches');
    }
  };
  const changePassword = async () => {
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
    /*     const data = await response.json();
    console.log(data); */
  };

  const updatePasswordHandle = () => {
    if (validatePassword(password) && changePassword()) {
      alert('Password is change');
    } else {
      alert('Password is not changed');
    }
  };

  return (
    <div>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3 className={styles.subTitle}>Информация о профиле</h3>
          <ul className={styles.settings__list}>
            <li className={styles.settings__item}>
              <p>{`Id: ${id}`}</p>
            </li>
            <li className={styles.settings__item}>
              <p>{`Username: ${username}`}</p>
            </li>
            <li className={styles.settings__item}>
              <p>{`Имя пользователя: ${name || 'отсутствует'}`}</p>
            </li>
            <li className={styles.settings__item}>
              <p>{`Email: ${email}`}</p>
            </li>
          </ul>
        </div>
        <div className={styles.settings}>
          <div className={styles.user}>
            <h3 className={styles.subTitle}>Изменить имя</h3>
            <ul className={styles.settings__list}>
              <li className={styles.settings__item}>
                <input
                  className={styles.settings__input}
                  type={'text'}
                  value={newName}
                  placeholder='Изменить имя'
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button className={styles.settings__button} type={'submit'}>
                  Изменить
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.user}>
            <h3 className={styles.subTitle}>Изменить email</h3>
            <ul className={styles.settings__list}>
              <li className={styles.settings__item}>
                <input
                  className={styles.settings__input}
                  type={'email'}
                  value={newEmail}
                  placeholder='Изменить емайл'
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <button className={styles.settings__button} type={'submit'}>
                  Изменить
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.user}>
            <h3 className={styles.subTitle}>Изменить пароль</h3>
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
                  onClick={updatePasswordHandle}
                  className={styles.settings__button}
                  type={'submit'}
                >
                  Изменить
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
