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
  const { id, name, email, password } = user;

  console.log(id, name, email);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [сurrentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  if (newName === name) {
    console.log('Имя совпадает, введите другое имя');
  } else {
    console.log('Всё ок');
  }

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
          <li className={styles.settings__item}>
            <input
              className={styles.settings__input}
              type={'password'}
              value={newPassword}
              placeholder='Изменить пароль'
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              /*               onClick={handleChangePassword}
               */ className={styles.settings__button}
              type={'submit'}
            >
              Изменить
            </button>
          </li>
        </ul>
        <div>
          <ul className={styles.settings__list}>
            <li>{newName}</li>
            <li>{newEmail}</li>
            <li>{newPassword}</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

/* PUT для изменения пароля /api/auth/change-password */
/* const handleChangeName = async (e) => {
	e.preventDefault();
	const response = await fetch(
		`https://api.dless.ru/api/auth/users/${id}/change-password`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ password: newPassword }),
		}
	);
	const data = await response.json();
	console.log(data);
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
			body: JSON.stringify({ password: newPassword }),
		}
	);
	const data = await response.json();
	console.log(data);
};
const handleChangeEmail = async (e) => {
	e.preventDefault();
	const response = await fetch(
		`https://api.dless.ru/api/auth/users/${id}/change-email`,
		{
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ email: newEmail }),
		}
	);
	const data = await response.json();
	console.log(data);
}; */
