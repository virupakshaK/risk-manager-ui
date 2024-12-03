import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import DataTable from '../DataTable'

export const UserListDetails = () => {
  return (
     <Box>
       <Button sx={{ml: 2}}
      component={Link}  // Use react-router's Link as the base component
      to="/accessmanagement/addUser" // Target path for navigation
      variant="outlined"
      color="primary"
    >
      Add New User
    </Button>
      <DataTable />
     </Box>
  )
}

export default UserListDetails;
