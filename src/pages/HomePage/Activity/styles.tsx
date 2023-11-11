import { createStyles } from '@mantine/core';

// default 5vw

export const useStyles = createStyles((_theme, _params: any) => {
  return {
    backdrop: {
      position: 'relative',
      display: ' inline-block',
      background: 'rgba(154, 154, 152, 0.6)',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',

        background:
          'linear-gradient(to right, rgba(154, 154, 152, 1) 0%, rgba(154, 154, 152, 0) 10%, rgba(154, 154, 152, 0) 90%, rgba(154, 154, 152, 1) 100%)',
      },
    },
  };
});
