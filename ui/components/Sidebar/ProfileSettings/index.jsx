import React, { useState } from 'react';
import Toast from '@/ui/components/global/Toast/index';

import styles from '../../Sidebar/ProfileSettings/Settings.module.scss';

export default function ProfileSettings({ user, token }) {
  const [list, setList] = useState([]);
  const { id, username, name, email } = user;
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validatePassword = (password) => {
    const passwordRegEx = /(?=.*[0-9])[0-9a-zA-Z!@#$%^&*]{6,20}/g;
    if (password === passwordConfirmation && password !== currentPassword) {
      return passwordRegEx.test(password);
    } else {
      setList([
        ...list,
        {
          id: Date.now(),
          type: 'error',
          description: 'Введите корректный пароль',
        },
      ]);
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
    if (response.ok && response.status === 200) {
      setList([
        ...list,
        {
          id: Date.now(),
          type: 'success',
          description: 'Пароль успешно обновлён',
        },
      ]);
    } else {
      setList([
        ...list,
        {
          id: Date.now(),
          type: 'error',
          description: 'Ошибка смены пароля',
        },
      ]);
    }
  };
  const clearInput = () => {
    if (updatePasswordHandle) {
      setCurrentPassword('');
      setPassword('');
      setPasswordConfirmation('');
    }
  };

  const updatePasswordHandle = () => {
    validatePassword(password) && changePassword()
      ? clearInput()
      : clearInput();
  };

  return (
    <div>
      <Toast toastlist={list} setList={setList} />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3 className={styles.subTitle}>Информация о профиле</h3>
          <ul className={styles.settings__list}>
            <li className={styles.settings__item}>
              <p className={styles.descr}>{`Id: ${id}`}</p>
            </li>
            <li className={styles.settings__item}>
              <p className={styles.descr}>{`Username: ${username}`}</p>
            </li>
            <li className={styles.settings__item}>
              <p className={styles.descr}>{`Имя пользователя: ${
                name || 'отсутствует'
              }`}</p>
            </li>
            <li className={styles.settings__item}>
              <p className={styles.descr}>{`Email: ${email}`}</p>
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
                {password && (
                  <label className={styles.label}>
                    {' '}
                    Буквы и цифры. Не менее 6 символов.{' '}
                  </label>
                )}
              </li>
              <li className={styles.settings__item}>
                <input
                  className={styles.settings__input}
                  type={'password'}
                  value={passwordConfirmation}
                  placeholder='Подтвердите новый пароль'
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </li>
            </ul>
            <button
              onClick={updatePasswordHandle}
              className={styles.settings__button}
              type={'submit'}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
