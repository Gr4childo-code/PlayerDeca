import React from 'react';
import styles from '@/ui/components/global/Custom_Notification/Notification.module.scss';
const Custom_Notification = ({ type, message }) => {
  switch (type) {
    case 'error':
      return (
        <div className={styles.notification_container + ' ' + styles.error}>
          <p className={styles.message}>{message}</p>
        </div>
      );
    case 'warn':
      return (
        <div className={styles.notification_container + ' ' + styles.warn}>
          <p className={styles.message}>{message}</p>
        </div>
      );
    case 'success':
      return (
        <div className={styles.notification_container + ' ' + styles.success}>
          <p className={styles.message}>{message}</p>
        </div>
      );

    default:
      break;
  }
};

export default Custom_Notification;
