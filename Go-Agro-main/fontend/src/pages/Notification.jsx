import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './Notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [notificationToDelete, setNotificationToDelete] = useState(null);

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

  const handleDelete = (id) => {
    setNotificationToDelete(id);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    // Call API to delete the notification
    axios.delete(`http://localhost:5000/notifications/${notificationToDelete}`)
      .then(() => {
        // Filter out the deleted notification
        setNotifications(notifications.filter(notification => notification._id !== notificationToDelete));
        setShowPopup(false);
      })
      .catch(error => {
        console.log(error);
        setShowPopup(false);
      });
  };

  return (

    <div className='notification-container'>
      <div >
        <Link
          to="/"
          className='bg-green-800 text-white px-4 py-1 rounded-lg w-fit absolute  left-4'
        >
          <BsArrowLeft className='text-2xl' />
        </Link>
      </div>
      <h1 className='notification-header'>My Notification</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='notification-list'>
          {notifications.map((notification, index) => (
            <div key={index} className='notification-item'>
              <div className='notification-message'>{notification.message}</div>
              {notification.onClickPath && (
                <div className="click-path">
                  <Link to={`/reviews/create`} className="button-link">
                    {notification.onClickPath}
                  </Link>
                </div>
              )}
              <div className='flex justify-center gap-10px'>
                <button className='view-btn'>
                  <Link to={`/notifications/details/${notification._id}`} className="button-link">
                    View Full Notification
                  </Link>
                </button>
                <button className='d-btn' onClick={() => handleDelete(notification._id)}>
                  Delete Notification
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-box">
            <p>Are you sure you want to delete this notification?</p>
            <div className="popup-buttons">
              <button className="yes-btn" onClick={confirmDelete}>Yes</button>
              <button className="no-btn" onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
