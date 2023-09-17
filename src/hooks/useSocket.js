import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToChatConversations } from '../redux/chatSlice/chatSlice';

const socket = io('http://localhost:3333', { transports: ['websocket'] });

export const useSocket = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleAiResponse = (response) => {
      dispatch(addToChatConversations({ id: Date.now(), ...response }));
      if (Object.keys(response) !== 0) setLoading(false);
    };

    socket.on('connect', () => {});

    socket.on('aiResponse', handleAiResponse);

    return () => {
      socket.off('aiResponse', handleAiResponse);
    };
  }, [dispatch]);

  const handleSubmitNewMessage = (message, setMessage, e) => {
    setLoading(true);
    e.preventDefault();
    socket.emit('askCoach', [{ role: 'user', content: message }]);
    dispatch(
      addToChatConversations({
        id: Date.now(),
        role: 'user',
        content: message,
      }),
    );
    setMessage('');
  };

  return { handleSubmitNewMessage, loading };
};
