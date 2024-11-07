import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057', 
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff', 
    },
    text: {
      primary: '#333333', 
      secondary: '#777777', 
    },
    error: {
      main: '#d32f2f',
    },
    success: {
      main: '#388e3c', 
    },
    info: {
      main: '#1976d2',
    },
    warning: {
      main: '#f57c00',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 16px',
          backgroundColor: '#1A237E', 
          color: '#fff', 
          '&:hover': {
            backgroundColor: '#d4004c', 
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#1A237E',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#283593',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1A237E',
        },
      },
    },
  },
});

export default theme;
