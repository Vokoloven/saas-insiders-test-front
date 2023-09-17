import { Box, FormControl, IconButton } from '@mui/material';
import { SendIcon } from '../../assets/SendIcon';
import { Input } from './Input';

export const Form = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <FormControl
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
        <Input />
        <Box sx={{ ml: '24px' }}>
          <IconButton type="submit">
            <SendIcon />
          </IconButton>
        </Box>
      </FormControl>
    </Box>
  );
};
