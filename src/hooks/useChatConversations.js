import { fetchChatConversations } from '../redux/chatSlice/chat.service';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export const useChatConversations = () => {
  const dispatch = useDispatch();
  const [chatConversations, setChatConversations] = useState([]);

  useEffect(() => {
    const getChatConversations = async () => {
      const data = await dispatch(fetchChatConversations());
      if (data.type === 'chat/fetch/fulfilled')
        setChatConversations(data.payload);
    };

    getChatConversations();
  }, [dispatch]);

  return chatConversations;
};
