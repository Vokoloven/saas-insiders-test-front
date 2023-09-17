export const handleSubmitNewMessage = (socket, message, setMessage, e) => {
  e.preventDefault();
  socket.emit('askCoach', [{ role: 'user', content: message }]);
  setMessage('');
};
