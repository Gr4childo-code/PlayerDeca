import React from 'react';

import styles from '../Contacts/Contacts.module.scss';

export default function Contacts({ email, phoneNum }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        <span>C</span>ontacts
      </h3>
      <ul>
        <li className={styles.account__item}>
          <p className={styles.account__subTitle}>Email</p>
          <p className={styles.account__descr}>{email}</p>
        </li>
        <li className={styles.account__item}>
          <p className={styles.account__subTitle}>Основной телефон</p>
          <p className={styles.account__descr}>{phoneNum}</p>
        </li>
        <li className={styles.account__item}>
          <div className={styles.account__links}>
            <p className={styles.account__subTitle}>Добавленные аккаунты</p>
            <img
              src='https://pngicon.ru/file/uploads/vk.png'
              width={25}
              height={25}
              alt='vk'
            />
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yandex_icon.svg/2048px-Yandex_icon.svg.png'
              width={25}
              height={25}
              alt='yandex'
            />
            <img
              src='https://camo.githubusercontent.com/4133dc1cd4511d4a292b84ce10e52e4ed92569fb2a8165381c9c47be5edc2796/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67'
              width={25}
              height={25}
              alt='yandex'
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
