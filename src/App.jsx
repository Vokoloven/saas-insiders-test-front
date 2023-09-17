import React, {Suspense} from 'react';
import { useFonts, useTheme } from './hooks';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './pages';

const Chat = React.lazy(() => import('./pages/Chat/Chat.jsx'))

export const App = () => {
  useFonts();

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Suspense fallback={<div>Loading...</div>}>
     <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
     </Suspense>
    </ThemeProvider>
  );
};
