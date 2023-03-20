import { useState } from 'react';

const useNotification = () => {
  const [notificationMessage, setNotificationMessage] = useState({
    message: '',
    type: '',
  });
  const handleNotification = (message, type, timeout) => {
    setNotificationMessage({
      message,
      type,
    });

    setTimeout(() => {
      setNotificationMessage({
        ...notificationMessage,
      });
    }, timeout);
  };
  return { notificationMessage, handleNotification };
};

export default useNotification;
