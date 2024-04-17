// alertSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    loading: false,
    notifications: [], // Add a notifications array to store notifications
  },
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
    addNotification: (state, action) => { // Define a new action to add a notification
      state.notifications.push(action.payload); // Push the new notification to the notifications array
    },
  },
});

export const { showLoading, hideLoading, addNotification } = alertSlice.actions;
