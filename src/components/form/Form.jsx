import { Box, FormControl, IconButton } from '@mui/material';
import { SendIcon } from '../../assets/SendIcon';
import { Input } from './Input';
import { usePath } from '../../hooks';
import { io } from 'socket.io-client';
import { useState } from 'react';
import { handleSubmitNewMessage } from './formHandlers';

const socket = io('http://localhost:3333', { transports: ['websocket'] });

export const Form = () => {
  const path = usePath();
  const [message, setMessage] = useState('');

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('aiResponse', (response) => {
    console.log('Received AI response:', response);
  });

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pb: '60px',
        pt: '36px',
        px: '40px',
        ...(path !== 'chat' && { display: 'none' }),
      }}
    >
      <FormControl
        onSubmit={handleSubmitNewMessage.bind(
          null,
          socket,
          message,
          setMessage,
        )}
        onChange={handleChange}
        sx={(theme) => ({
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          [theme.breakpoints.up('laptop')]: {
            maxWidth: '680px',
          },
        })}
        variant="outlined"
        component={'form'}
      >
        <Input value={message} />
        <Box sx={{ ml: '24px' }}>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </FormControl>
    </Box>
  );
};
