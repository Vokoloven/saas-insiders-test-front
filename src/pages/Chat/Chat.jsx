import { Paper, Box, FormControl, OutlinedInput } from '@mui/material';

export const Chat = () => {
  return (
    <Box sx={{ pt: '42px', width: '100%' }}>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          height: '940px',
          borderTopLeftRadius: '40px',
          borderBottomLeftRadius: '40px',
          boxShadow: '0px 2px 20px 0px rgba(0, 0, 0, 0.06)',
        }}
      >
        <FormControl
          sx={{ m: 1, width: '680px' }}
          variant="outlined"
          component={'form'}
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'chat input',
            }}
            placeholder="Ask me anything that I can help you or your team.. "
            sx={{
              borderRadius: '20px',
              color: 'text.input',
              '& .MuiOutlinedInput-input': {
                py: '16px',
                px: '20px',
              },
              '&::placeholder': {
                color: 'text.input',
              },
            }}
          />
        </FormControl>
      </Paper>
    </Box>
  );
};
