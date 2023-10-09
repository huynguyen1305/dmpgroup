import { createStyles } from '@mantine/core';

// default 5vw

export const useStyles = createStyles((_theme, _params: any) => {
  return {
    backdrop: {
      position: 'relative',
      '&::before': {
        content: '""',
        background: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      },
    },
  };
});
