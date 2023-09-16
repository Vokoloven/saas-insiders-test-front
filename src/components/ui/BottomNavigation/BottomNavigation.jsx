import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import { HeartHandShakeIcon } from '../../../assets/HeartHandShakeIcon';
import { Link } from 'react-router-dom';

export const CustomBottomNavigation = () => {
  const [value, setValue] = useState(0);

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
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Agile"
          icon={<HomeIcon />}
          component={Link}
          to={'/'}
        />
        <BottomNavigationAction
          label="AI Agile Coach"
          icon={<HeartHandShakeIcon />}
          component={Link}
          to={'chat'}
        />
      </BottomNavigation>
    </Box>
  );
};
