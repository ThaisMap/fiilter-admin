import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1669AA',
      light: '#2196F3',
    },
    secondary: {
      main: '#F50057',
    },

    error: {
      main: red.A400,
    },
  },
});

export default theme;
