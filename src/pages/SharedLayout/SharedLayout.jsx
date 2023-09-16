import { Box } from '@mui/material';
import { Sidebar } from '../../components/ui';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Sidebar />
      <Outlet />
    </Box>
  );
};
