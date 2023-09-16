import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { HeartHandShakeIcon } from '../../../assets/HeartHandShakeIcon';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <Box sx={{ pr: '22px' }}>
      <Box
        sx={{
          width: '180px',
          flexShrink: 0,
          backgroundColor: 'background.default',
          height: '100vh',
          pt: '54px',
        }}
      >
        <List sx={{ p: 0 }}>
          <ListItem
            button
            component={Link}
            to="/"
            sx={{ fontSize: '24px', justifyContent: 'center', p: 0 }}
          >
            Agile
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/chat"
            sx={{
              mt: '64px',
              fontSize: '18px',
              p: 0,
            }}
          >
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <HeartHandShakeIcon />
            </ListItemIcon>
            AI Agile Coach
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
