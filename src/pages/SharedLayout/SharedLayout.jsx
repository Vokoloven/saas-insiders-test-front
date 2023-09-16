import { Box } from '@mui/material';
import {
  Sidebar,
  CustomBottomNavigation,
  ChatWrapper,
} from '../../components/ui';
import { Outlet } from 'react-router-dom';
import { usePath } from '../../hooks';

export const SharedLayout = () => {
  const path = usePath();
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box sx={{ width: '100%' }}>
        <Outlet />
        {path === '/' && <ChatWrapper></ChatWrapper>}
        <CustomBottomNavigation />
      </Box>
    </Box>
  );
};
