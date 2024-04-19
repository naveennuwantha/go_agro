// Notification.jsx

import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import './';


const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/notifications')
      .then((res) => {
        setNotifications(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='notification-container'>
      <h1 className='notification-header'>Notification</h1>
      {loading ? (
        <Spinner />
      ) : (
        <table className='notification-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Notification</th>
              <th>Click Path</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={notifications._id}>
                <td>{index + 1}</td>
                <td>{notification.message}</td>
                <td>{notification.onClickPath}</td>
                <td className='notification-actions'>
                  <Link to={`/notifications/details/${notification._id}`} title="View Details">
                    <BsInfoCircle />
                  </Link>
                  <Link to={`/notifications/delete/${notification._id}`} title="Delete notification">
                    <MdOutlineDelete />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Notification;
