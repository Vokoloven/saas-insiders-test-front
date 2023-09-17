import { ChatWrapper } from '../../components/ui';
import { Message } from '../../components/ui';
import { Box } from '@mui/material/';

export const Chat = () => {
  return (
    <ChatWrapper>
      <Box>
        <Message />
      </Box>
    </ChatWrapper>
  );
};
