import { Box, FormControl, IconButton } from '@mui/material';
import { SendIcon } from '../../assets/SendIcon';
import { Input } from './Input';
import { usePath } from '../../hooks';

export const Form = () => {
  const path = usePath();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pb: '60px',
        pt: '36px',
        px: '40px',
        ...(path !== 'chat' && { display: 'none' }),
      }}
    >
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
