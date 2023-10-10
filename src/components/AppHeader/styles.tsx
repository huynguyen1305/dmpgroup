import { createStyles } from '@mantine/core';

// default 5vw

export const useStyles = createStyles((_theme, params: any) => {
  console.log(params);
  return {
    wrapper: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,

      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '80px',
      padding: '0 5vw',
      backgroundColor: params ? 'white' : 'transparent',
      boxShadow: params ? '0 2px 4px 0 rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.1s ease',
    },
    logo: {
      height: '80px',
    },
    navItem: {
      position: 'relative',
      color: params ? 'black' : 'rgba(255, 255, 255, 1)',

      textTransform: 'uppercase',
      fontSize: '1rem',
      fontWeight: 500,
      margin: '0 1rem',
      transition: 'all 0.3s ease-in-out',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '2px',
        background: params ? 'black' : 'rgba(255, 255, 255, 1)',
        width: '0',
        borderRadius: '100px',
        transition: 'all 0.3s ease-in-out',
      },

      '&:hover': {
        color: params ? 'black' : 'rgba(255, 255, 255, 1)',
        '&::after': {
          width: '100%',
        },
      },

      '&.active': {
        color: params ? 'black' : 'rgba(255, 255, 255, 1)',
        fontWeight: 600,
        '&::after': {
          width: '100%',
        },
      },
    },
  };
});
