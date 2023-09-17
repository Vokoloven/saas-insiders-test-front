import { Box, FormControl, IconButton, Typography } from '@mui/material';
import { SendIcon } from '../../assets/SendIcon';
import { Input } from './Input';
import { usePath } from '../../hooks';
import { useState } from 'react';
import { useSocket } from '../../hooks';
import { handleChange } from './formHandlers';

export const Form = () => {
  const path = usePath();
  const [message, setMessage] = useState('');
  const { handleSubmitNewMessage, loading } = useSocket(message, setMessage);

  return (
    <Box
      sx={{
        pb: '60px',
        px: '40px',
        pt: loading ? '35px' : '59px',
        ...(path !== 'chat' && { display: 'none' }),
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '680px',
          mx: 'auto',
        }}
      >
        {loading && (
          <Typography
            sx={{
              mb: '12px',
              color: 'text.placeholder',
              alignSelf: 'flex-start',
            }}
          >
            AgileGPT writing..
          </Typography>
        )}
        <FormControl
          onSubmit={handleSubmitNewMessage.bind(null, message, setMessage)}
          onChange={handleChange.bind(null, setMessage)}
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
    </Box>
  );
};
