import { ChatWrapper } from '../../components/ui';
import { Message } from '../../components/ui';
import { Box } from '@mui/material/';
import { useChatConversations } from '../../hooks';
import { useSelector } from 'react-redux';
import { selectChat } from '../../redux/selectors/selectChat';

export const Chat = () => {
  useChatConversations();
  const { chatConversations } = useSelector(selectChat);

  return (
    <ChatWrapper>
      <Box>
        <Message messages={chatConversations} />
      </Box>
    </ChatWrapper>
  );
};
