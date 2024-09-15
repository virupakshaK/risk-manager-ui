import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const PageNotFound = () => {
  return (
    <>
    <Box sx={{width: '100%', height: '55vh'}}>
    <Typography variant='h5' sx={{alignContent:'center', textAlign: 'center'}}> Page Not Found, Please contact admin</Typography>
    </Box>
    </>
  )
}
