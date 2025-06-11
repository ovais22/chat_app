import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/storeSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer
  }
});
