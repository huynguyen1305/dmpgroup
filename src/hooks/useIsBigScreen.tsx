import { useMediaQuery } from '@mantine/hooks';

export default function useIsBigScreen() {
  const isDesktop = useMediaQuery('(min-width: 1026px)');
  return isDesktop;
}
