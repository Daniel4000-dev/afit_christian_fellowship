import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/counter/eventSlice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});
