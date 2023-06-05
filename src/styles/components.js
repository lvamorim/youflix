import { primary, darker } from './colors';

const components = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 0 10px -7px currentColor',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: darker,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: 'currentColor',
          fontWeight: 'bold',
          textDecoration: 'none',

          '&:hover': {
            color: primary,
          },
        },
      },
    },
    
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: darker,
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          color: 'currentColor',
          zIndex: 9999,
        },
      },
    },
  },
};

export default components;
