import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import Layout from '@/ui/components/Sidebar/Layout';
import styles from '../../../ui/components/Sidebar/ProfileSettings/Settings.module.scss';
import { fetchAPI } from '@/utils/api/fetch';
import { dataUserId } from '@/utils/api/QueryParams';

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  if (!user) {
    return {
      notFound: true,
    };
  }

  const response = await fetchAPI(`/users?${dataUserId}`);
  const dataUsersId = await response.json();

  return {
    props: { user, dataUsersId },
  };
};

//Запроси в кверипарамс юзера и выведи значения, у тебя уже там есть параметры и сравни с теми значения что в сессии

// Получить объект юзер от сессии +
// Создать кнопку с запросом на изменение
// Передать его в функции

export default function ProfileSettings({ user, dataUsersId }) {
  const { id, name, email } = user;
  const [currentUser, setNewUser] = useState(user);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  /*   const [сurrentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState(''); */
  console.log(dataUsersId);
  console.log(currentUser);
  return (
    <Layout>
      <h3 className={styles.title}>
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <p>id пользователя : {id}</p>
          <p>Имя пользователя : {name}</p>
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
