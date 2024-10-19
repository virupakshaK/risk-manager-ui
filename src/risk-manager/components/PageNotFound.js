import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MyComponent from './MyComponent'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

export const PageNotFound = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{width: '100%', height: '55vh'}}>
    <Typography variant='h5' sx={{alignContent:'center', textAlign: 'center'}}> Page Not Found, Please contact admin</Typography>
    <MyComponent />
    </Box>
    </ThemeProvider>
  )
}
