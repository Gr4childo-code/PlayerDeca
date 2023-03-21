import React, { useEffect } from 'react';
import styles from '@/ui/components/global/Toast/Toast.module.scss';
const Toast = ({ toastlist, setList }) => {
  const deleteToast = (id) => {
    const toastListItem = toastlist.filter((e) => e.id !== id);
    setList(toastListItem);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div className={`${styles.container} `}>
      {toastlist.map((toast, i) => (
        <div key={i} className={`${styles.notification} ${styles[toast.type]}`}>
          <div className={styles.notification__message}>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
          <button onClick={() => deleteToast(toast.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
