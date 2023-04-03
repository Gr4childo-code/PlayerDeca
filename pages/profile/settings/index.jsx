import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import styles from '../../../ui/components/Sidebar/ProfileSettings/Settings.module.scss';
import { fetchAPI } from '@/utils/api/fetch';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  const jwtToken = session.jwt;
  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user, jwtToken },
  };
};

export default function ProfileSettings({ user, jwtToken }) {
  const { id, name, email } = user;
  const [currentUser, setNewUser] = useState(user);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  console.log(currentUser);
  console.log(jwtToken);

  const updatePassword = async () => {
    const response = await fetchAPI(`/auth/change-password`, 'POST', {
      currentPassword: currentPassword,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Layout>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <p>id пользователя : {id}</p>
          <p>Имя пользователя : {name || 'Нет имени'}</p>
          <p>Емайл пользователя : {email}</p>
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
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button className={styles.settings__button} type={'submit'}>
              Изменить
            </button>
          </li>
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
        <div>
          <ul className={styles.settings__list}>
            <li>{newName}</li>
            {/* <li>{newEmail}</li> */}
            <li>{password}</li>
            <li>{passwordConfirmation}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

/*
Отправить пароль по-другому
const updatePassword = async () => {
    const response = await fetchAPI(`/auth/change-password`, 'POST', {
      currentPassword: currentPassword,
      password: password,
      passwordConfirmation: passwordConfirmation,
    });
    const data = await response.json();
    console.log(data);
  }; */
