import { useFonts, useTheme } from './hooks';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout, Chat } from './pages';

export const App = () => {
  useFonts();

  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
