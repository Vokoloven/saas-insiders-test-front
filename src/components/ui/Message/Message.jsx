/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material/';
import React from 'react';

export const Message = ({ messages }) => {
  return (
    <Box>
      {messages?.map(({ id, content, role }) => (
        <React.Fragment key={id}>
          <Box
            sx={{
              display: 'flex',
              ...(role === 'user'
                ? { justifyContent: 'flex-start' }
                : { justifyContent: 'flex-end' }),
            }}
          >
            <Box
              sx={{
                position: 'relative',
                py: '25px',
                px: '43px',
                ...(role === 'user'
                  ? { bgcolor: 'background.msgUser' }
                  : { bgcolor: 'background.msgAssist' }),
                borderRadius: '40px',
                mb: '20px',
                maxWidth: '704px',

                '&::before': {
                  content: '""',
                  borderRadius: '100%',
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  zIndex: -1,
                  ...(role === 'user'
                    ? { bgcolor: 'background.msgUser', left: '-20px' }
                    : { bgcolor: 'background.msgAssist', right: '-20px' }),
                  bottom: '0',
                },
                '&::after': {
                  content: '""',
                  borderRadius: '100%',
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  zIndex: -1,
                  bgcolor: 'background.paper',
                  bottom: '7px',
                  ...(role === 'user' ? { left: '-36px' } : { right: '-36px' }),
                },
              }}
            >
              <Typography component={'p'} variant={'button'}>
                {role}
              </Typography>
              {content}
            </Box>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};
