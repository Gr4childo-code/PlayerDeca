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
        <span>S</span>ettings
      </h3>
      <div className={styles.wrapper}></div>
    </>
  );
}
