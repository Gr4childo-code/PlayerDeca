import React, { useState } from 'react';

import styles from '../Settings/Settings.module.scss';
import Input from '../../Form/Input';

export default function Settings({ userName, userEmail, userPassword }) {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState(userPassword);

  const handleChangeValue = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <h3 className={styles.title}>
        <span>E</span>dit profile
      </h3>
      <div className={styles.wrapper}>
        <div className={styles.userWrapper}>
          <ul className={styles.userInfo}>
            <li className={styles.userInfo__item}>
              <p>Username:</p> {name || ''}
            </li>
            <li className={styles.userInfo__item}>
              <p>Password:</p> {password || ''}
            </li>
            <li className={styles.userInfo__item}>
              <p>Email:</p> {email || ''}
            </li>
          </ul>
        </div>
        <div className={styles.form}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <label>Username</label>
              <Input
                type={'text'}
                placeholder={'Enter username'}
                value={name}
                onChange={handleChangeValue}
                className={styles.input}
              />
            </li>
            <li className={styles.list__item}>
              <label>Password</label>
              <Input
                type={'text'}
                placeholder={'Enter password'}
                value={password}
                onChange={handleChangePassword}
                className={styles.input}
              />
            </li>
            <li className={styles.list__item}>
              <label>Email</label>
              <Input
                type={'text'}
                placeholder={'Enter email'}
                value={email}
                onChange={handleChangeEmail}
                className={styles.input}
              />
            </li>
            <button className={styles.button}>confirm</button>
          </ul>
        </div>
      </div>
    </>
  );
}
