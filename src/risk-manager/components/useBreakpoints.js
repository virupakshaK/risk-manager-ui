// src/hooks/useBreakpoints.js
import { useMediaQuery, createTheme } from '@mui/material';

const useBreakpoints = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1281,
        lg: 1981,
        xl: 1990,
      },
    },
  });

  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isXl = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

  return { isXs, isSm, isMd, isLg, isXl };
};

export default useBreakpoints;
