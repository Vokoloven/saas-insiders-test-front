/* eslint-disable react/prop-types */
import { OutlinedInput } from '@mui/material';

export const Input = ({ value }) => {
  return (
    <OutlinedInput
      value={value}
      id="outlined-adornment-weight"
      aria-describedby="outlined-weight-helper-text"
      inputProps={{
        'aria-label': 'chat input',
      }}
      placeholder="Ask me anything that I can help you or your team.. "
      sx={{
        borderRadius: '20px',
        bgcolor: 'background.white',
        color: 'text.input',
        width: '100%',
        '& .MuiOutlinedInput-input': {
          py: '16px',
          px: '20px',
        },
        '& ::placeholder': {
          color: 'text.placeholder',
        },
        '&.MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'border.main',
            borderStyle: 'solid',
            borderWidth: '1px',
          },
          '&:hover fieldset': {
            borderColor: 'border.main',
            borderStyle: 'solid',
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'border.main',
            borderStyle: 'solid',
            borderWidth: '1px',
          },
        },
      }}
    />
  );
};
