export const getDesignTokens = () => ({
  palette: {
    text: {
      input: '#686868',
      placeholder: '#ACADAD',
    },
    buttons: {},
    background: {
      default: '#D8E1ED',
      paper: '#F9F9F9',
      white: '#FFFFFF',
    },
    border: {
      main: '#ACADAD',
    },
  },
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
