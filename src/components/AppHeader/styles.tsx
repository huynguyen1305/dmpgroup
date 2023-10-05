import { createStyles } from '@mantine/core';

// default 5vw

export const useStyles = createStyles(() => {
  return {
    wrapper: {
      position: 'fixed',
      inset: 0,

      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
      color: 'white',
      height: '80px',
      padding: '0 5vw',
    },
    logo: {
      height: '80px',
    },
    navItem: {
      position: 'relative',
      color: 'rgba(255, 255, 255, 0.6)',
      textTransform: 'uppercase',
      fontSize: '1.2rem',
      fontWeight: 500,
      margin: '0 1rem',
      transition: 'all 0.3s ease-in-out',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -8,
        left: '50%',
        transform: 'translateX(-50%)',
        height: '0.2rem',
        background: 'white',
        width: '0',
        borderRadius: '100px',
        transition: 'all 0.3s ease-in-out',
      },

      '&:hover': {
        color: 'white',
        '&::after': {
          width: '100%',
        },
      },
    },
  };
});
