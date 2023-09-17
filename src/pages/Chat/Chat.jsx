import { ChatWrapper } from '../../components/ui';
import { Message } from '../../components/ui';
import { Box } from '@mui/material/';
import { useChatConversations } from '../../hooks';

export const Chat = () => {
  const chatConversations = useChatConversations();

  return (
    <ChatWrapper>
      <Box>
        <Message messages={chatConversations} />
      </Box>
    </ChatWrapper>
  );
};
