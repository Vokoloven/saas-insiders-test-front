import { createSlice } from '@reduxjs/toolkit';
import { fetchChatConversations } from './chat.service';

const initialState = {
  chatConversations: [],
  loading: 'idle',
  error: '',
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChatConversations.pending, (state) => {
      state.error = '';
      state.loading = 'pending';
    });
    builder.addCase(fetchChatConversations.fulfilled, (state, { payload }) => {
      state.chatConversations = [...state.chatConversations, payload];
      state.loading = 'succeeded';
    });
    builder.addCase(fetchChatConversations.rejected, (state, { payload }) => {
      state.error = payload;
      state.loading = 'failed';
    });
  },
});
