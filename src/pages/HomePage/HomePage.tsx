import { Box } from '@mantine/core';
import useIsBigScreen from '../../hooks/useIsBigScreen';
import LogoAnimation from '../../components/LogoAnimation/LogoAnimation';

const HomePage = () => {
  const isDesktop = useIsBigScreen();
  console.log('isDesktop', isDesktop);

  return (
    <Box
      sx={{
        background: '#898989',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '500px',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LogoAnimation />
      </Box>
    </Box>
  );
};

export default HomePage;
