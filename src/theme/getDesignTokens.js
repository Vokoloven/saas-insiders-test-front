export const getDesignTokens = () => ({
  palette: {
    text: {
      input: '#686868',
    },
    buttons: {},
    background: {
      default: '#D8E1ED',
      paper: '#F9F9F9',
    },
  },
  breakpoints: {
    values: {
      mobile: 375,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
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
