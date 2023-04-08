import React, { useState } from 'react';
import Toast from '@/ui/components/global/Toast/index';

import styles from '../../Sidebar/ProfileSettings/Settings.module.scss';

import { postPassword } from '@/api';
import { validatePassword } from '@/utils/validators';

export default function ProfileSettings({ user, token }) {
  const [list, setList] = useState([]);
  const { name, email } = user;
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const clearInput = () => {
    if (updatePasswordHandle) {
      setCurrentPassword('');
      setPassword('');
      setPasswordConfirmation('');
    }
  };

  const updatePasswordHandle = () => {
    if (!validatePassword(currentPassword, password, passwordConfirmation)) {
      setList([
        ...list,
        {
          id: Date.now(),
          type: 'error',
          description: 'Введите корректный пароль',
        },
      ]);
      clearInput();
    } else {
      postPassword(
        {
          json: {
            currentPassword: currentPassword,
            password: password,
            passwordConfirmation: passwordConfirmation,
          },
        },
        token
      );
      setList([
        ...list,
        {
          id: Date.now(),
          type: 'success',
          description: 'Пароль успешно обновлён',
        },
      ]);
      clearInput();
    }
  };

  return (
    <div>
      <Toast toastlist={list} setList={setList} />
      <div className={styles.wrapper}>
        <div className={styles.settings}>
          <div className={styles.user}>
            <h3>Изменить имя</h3>
            <ul className={styles.settings__list}>
              <li className={styles.settings__item}>
                <input
                  className={styles.settings__input}
                  type={'text'}
                  value={newName}
                  placeholder={name}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button className={styles.settings__button} type={'submit'}>
                  Изменить
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.user}>
            <h3>Изменить email</h3>
            <ul className={styles.settings__list}>
              <li className={styles.settings__item}>
                <input
                  className={styles.settings__input}
                  type={'email'}
                  value={newEmail}
                  placeholder={email}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <button className={styles.settings__button} type={'submit'}>
                  Изменить
                </button>
              </li>
            </ul>
          </div>

          <div className={styles.user}>
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
