import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('/notifications');
            if (Array.isArray(response.data)) {
                setNotifications(response.data);
            } else {
                console.error('Invalid data format:', response.data);
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    const deleteNotification = async (id) => {
        try {
            await axios.delete(`/notifications/${id}`);
            fetchNotifications();
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    return (
        <div>
            <h1>Notifications</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification._id}>
                        <p>{notification.message}</p>
                        <p>{notification.createdAt}</p>
                        <a href={notification.onClickPath} target="_blank" rel="noopener noreferrer">Go to Link</a>
                        <button onClick={() => deleteNotification(notification._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationPage;
