import { createTheme } from '@mui/material/styles'

export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#ff2f80',
      dark: '#e8186c',
    },
    background: {
      default: '#f8f4f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2d35',
      secondary: '#667089',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Manrope", "Segoe UI", sans-serif',
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.1rem',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #e7e8ef',
          boxShadow: '0 26px 56px rgba(64, 70, 90, 0.12)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#f8f9fc',
        },
      },
    },
  },
})
