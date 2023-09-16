import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { HeartHandShakeIcon } from '../../../assets/HeartHandShakeIcon';
import { Link } from 'react-router-dom';
import { usePath } from '../../../hooks';

export const CustomBottomNavigation = () => {
  const path = usePath();
  const [value, setValue] = useState(() => {
    if (path === '/') {
      return 0;
    } else {
      return 1;
    }
  });

  useEffect(() => {
    if (path === '/') {
      setValue(0);
    } else {
      setValue(1);
    }
  }, [path]);

  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        pl: '45px',
        [theme.breakpoints.up('tablet')]: {
          display: 'none',
        },
      })}
    >
      <BottomNavigation
        sx={{
          borderBottomLeftRadius: '40px',
          position: 'fixed',
          bottom: 0,
          width: '100%',
        }}
        showLabels
        value={value}
      >
        <BottomNavigationAction
          label="Agile"
          icon={<HomeIcon />}
          component={Link}
          to={'/'}
          sx={{
            ...(path === '/'
              ? { color: 'buttons.active' }
              : { color: 'buttons.default' }),
          }}
        />
        <BottomNavigationAction
          label="AI Agile Coach"
          icon={
            <HeartHandShakeIcon
              sx={(theme) => ({
                stroke: theme.palette.buttons.default,
                ...(path === 'chat' && {
                  stroke: theme.palette.buttons.active,
                }),
              })}
            />
          }
          component={Link}
          to={'chat'}
        />
      </BottomNavigation>
    </Box>
  );
};
