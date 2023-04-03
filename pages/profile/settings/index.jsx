import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import styles from '../../../ui/components/Sidebar/ProfileSettings/Settings.module.scss';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
};

export default function ProfileSettings({ user }) {
  const { id, name, email } = user;
  const [currentUser, setNewUser] = useState(user);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  console.log(currentUser);

  const updatePassword = async (ctx) => {
    const session = await getSession(ctx);

    const { oldPassword, newPassword, confirmPassword } = session.user;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      }
    );
    const data = response.json();
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
            <button
              /*               onClick={handleChangeName}
               */ className={styles.settings__button}
              type={'submit'}
            >
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
              value={oldPassword}
              placeholder='Старый пароль'
              onChange={(e) => setOldPassword(e.target.value)}
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
