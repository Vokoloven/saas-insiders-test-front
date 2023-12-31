/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { Paper, Box, Container } from '@mui/material';
import { usePath } from '../../../hooks';
import { Form } from '../../form';

export const ChatWrapper = ({ children }) => {
  const path = usePath();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [children]);

  return (
    <Box
      sx={(theme) => ({
        pt: '42px',
        pb: '45px',
        width: '100%',
        [theme.breakpoints.down('tablet')]: {
          pl: '45px',
        },
      })}
    >
      <Paper
        elevation={0}
        sx={(theme) => ({
          px: '40px',
          width: '100%',
          height: 'calc(100vh - 98px)',
          borderTopLeftRadius: '40px',
          boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          ...(path === 'chat' && { flexDirection: 'column-reverse' }),
          [theme.breakpoints.up('tablet')]: {
            borderBottomLeftRadius: '40px',
            height: '940px',
          },
        })}
      >
        <Form />
        <Container
          ref={chatContainerRef}
          sx={{
            maxWidth: '1200px',
            pt: '40px',
            zIndex: 1,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
          }}
        >
          {children}
        </Container>
      </Paper>
    </Box>
  );
};
