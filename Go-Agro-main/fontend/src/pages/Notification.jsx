// Notification.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '../redux/notificationActions';

const NotificationPage = () => {
  const dispatch = useDispatch();
  const { notifications, loading, error } = useSelector(state => state.notification);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Notifications</h1>
      {notifications && notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.message}</p>
          <button onClick={() => handleDelete(notification.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
