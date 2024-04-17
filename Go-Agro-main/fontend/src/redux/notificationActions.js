import axios from 'axios';

// Action Types
export const FETCH_NOTIFICATIONS_REQUEST = 'FETCH_NOTIFICATIONS_REQUEST';
export const FETCH_NOTIFICATIONS_SUCCESS = 'FETCH_NOTIFICATIONS_SUCCESS';
export const FETCH_NOTIFICATIONS_FAILURE = 'FETCH_NOTIFICATIONS_FAILURE';

export const DELETE_NOTIFICATION_REQUEST = 'DELETE_NOTIFICATION_REQUEST';
export const DELETE_NOTIFICATION_SUCCESS = 'DELETE_NOTIFICATION_SUCCESS';
export const DELETE_NOTIFICATION_FAILURE = 'DELETE_NOTIFICATION_FAILURE';

// Action Creators
export const fetchNotificationsRequest = () => ({
  type: FETCH_NOTIFICATIONS_REQUEST,
});

export const fetchNotificationsSuccess = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload: notifications,
});

export const fetchNotificationsFailure = (error) => ({
  type: FETCH_NOTIFICATIONS_FAILURE,
  payload: error,
});

export const deleteNotificationRequest = () => ({
  type: DELETE_NOTIFICATION_REQUEST,
});

export const deleteNotificationSuccess = (id) => ({
  type: DELETE_NOTIFICATION_SUCCESS,
  payload: id,
});

export const deleteNotificationFailure = (error) => ({
  type: DELETE_NOTIFICATION_FAILURE,
  payload: error,
});

// Thunk Action Creators
export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(fetchNotificationsRequest());
    try {
      const response = await axios.get('/api/notifications'); // Replace with your backend endpoint
      dispatch(fetchNotificationsSuccess(response.data));
    } catch (error) {
      dispatch(fetchNotificationsFailure(error.message));
    }
  };
};

export const deleteNotification = (id) => {
  return async (dispatch) => {
    dispatch(deleteNotificationRequest());
    try {
      await axios.delete(`/api/notifications/${id}`); // Replace with your backend endpoint
      dispatch(deleteNotificationSuccess(id));
    } catch (error) {
      dispatch(deleteNotificationFailure(error.message));
    }
  };
};
