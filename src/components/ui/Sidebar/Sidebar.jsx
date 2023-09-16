import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { HeartHandShakeIcon } from '../../../assets/HeartHandShakeIcon';
import { Link } from 'react-router-dom';
import { usePath } from '../../../hooks';

export const Sidebar = () => {
  const path = usePath();

  return (
    <Box
      sx={(theme) => ({
        pr: '22px',
        pl: '44px',
        [theme.breakpoints.down('tablet')]: {
          display: 'none',
        },
      })}
    >
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
            selected={path === '/' && true}
          >
            Agile
          </ListItem>
          <ListItem
            button
            component={Link}
            selected={path === 'chat' && true}
            to="/chat"
            sx={{
              mt: '64px',
              fontSize: '18px',
              p: 0,
            }}
          >
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <HeartHandShakeIcon
                sx={(theme) => ({
                  stroke: theme.palette.buttons.default,
                })}
              />
            </ListItemIcon>
            AI Agile Coach
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
