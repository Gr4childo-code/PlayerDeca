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

  console.log(id, name, email);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  /*   const [сurrentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState(''); */

  return (
    <Layout>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <p>id пользователя : {id}</p>
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
          {/* <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'password'}
              value={newPassword}
              placeholder='Изменить пароль'
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={handleChangePassword}
              className={styles.settings__button}
              type={'submit'}
            >
              Изменить
            </button>
          </li> */}
        </ul>
        <div>
          <ul className={styles.settings__list}>
            <li>{newName}</li>
            <li>{newEmail}</li>
            {/* <li>{newPassword}</li> */}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
