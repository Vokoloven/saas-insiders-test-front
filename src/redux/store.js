import { configureStore } from '@reduxjs/toolkit';
import { chatSlice } from './chatSlice/chatSlice';

export const store = configureStore({
  reducer: {
    [chatSlice.name]: chatSlice.reducer,
  },
});
