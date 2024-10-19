import { useMediaQuery, createTheme } from '@mui/material';

const MyComponent = () => { 
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
  
  const isXl = useMediaQuery(theme.breakpoints.between('lg','xl'));
  
  return (
    <div>
        
        {console.log('isXs:' +isXs)}
        {console.log('isSm:' +isSm)}
        {console.log('isMd:' +isMd)}
        {console.log('isLg:'+isLg)}
        {console.log('isXl:'+isXl)}
        
      {isXs && <p>Extra small screen</p>}
      {isSm && <p>Small screen</p>}
      {isMd && <p>Medium screen</p>}
      {isLg && <p>Large screen</p>}
      {isXl && <p>Extra large screen</p>}
    </div>
  );
};
export default MyComponent;