import { Box, Typography, Container, Button } from '@mui/material';
import {
  Sidebar,
  CustomBottomNavigation,
  ChatWrapper,
} from '../../components/ui';
import { Outlet } from 'react-router-dom';
import { usePath } from '../../hooks';
import { Link } from 'react-router-dom';

export const SharedLayout = () => {
  const path = usePath();
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box sx={{ width: '100%' }}>
        <Outlet />
        {path === '/' && (
          <ChatWrapper>
            <Container
              maxWidth="md"
              style={{ marginTop: '64px', textAlign: 'center' }}
            >
              <Typography variant="h3" gutterBottom>
                Welcome to Agile AI Coach
              </Typography>
              <Typography variant="body1" paragraph>
                Elevate your Agile practices with the power of artificial
                intelligence.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={'chat'}
              >
                Get Started
              </Button>
            </Container>
          </ChatWrapper>
        )}
        <CustomBottomNavigation />
      </Box>
    </Box>
  );
};
