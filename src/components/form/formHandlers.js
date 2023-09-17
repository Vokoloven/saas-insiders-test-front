export const handleSubmitNewMessage = (
  socket,
  message,
  setMessage,
  addToChatConversations,
  dispatch,
  e,
) => {
  e.preventDefault();
  socket.emit('askCoach', [{ role: 'user', content: message }]);
  dispatch(
    addToChatConversations({ id: Date.now(), role: 'user', content: message }),
  );
  setMessage('');
};

export const handleChange = (setMessage, e) => {
  setMessage(e.target.value);
};
