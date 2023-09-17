import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchChatConversations = createAsyncThunk(
  'chat/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3333/openai');

      const { data } = response;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
