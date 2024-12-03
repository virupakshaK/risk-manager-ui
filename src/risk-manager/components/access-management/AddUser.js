import React, { useState } from 'react'
import { Button, Card, FormControl, Grid, TextField, Typography } from '@mui/material'
import useBreakpoints from '../useBreakpoints';
import { Box, display } from '@mui/system';
import { TransferList } from '../TransferList';
import { Link } from 'react-router-dom';

export const AddUser = () => {
    const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
    const itemWidth = isMd ? '45vh' : isLg ? '56vh' : '65vh';
    const [userData, setUserData] = useState({})

   const handleInputChange = (event) => {
     const{name, value} = event.target;
      
     setUserData((prev) => ({
         ...prev, [name] : value
     }));

   }

   const clearAllDetails = () => {
    setUserData({});
   }

  return (
<Grid container sx={{ width: '95%',
    height: isMd ? '100%' : isLg ? '60%' : '70%',
    maxHeight: isMd ? '65vh' : isLg ? '70vh' : '75vh',
                          overflowY: 'auto',
                          overflowX: 'auto',
                          ml: 2,
                          position: 'relative',
                          '&::-webkit-scrollbar': {
                          width: '10px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: '#888',
                          borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                          backgroundColor: '#555',

                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: '#f1f1f1',
                      }, }}
  >
  <Card
        sx={{
          m: 1,
          width: '100%',
          height: '35vh',
          p: 2,
          overflow: 'hidden', // Ensure content doesn't spill

        }}
      >

   <Grid container flexDirection={"row"} display={"flex"}>       
   <Grid md={4} item>
    <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='name' label="User Name"  value={userData.name || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
  </Grid>
   
   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='password' label="Password" type="password"  value={userData.password || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='confirmPassword' type="password" label="Confirm Password"  value={userData.confirmPassword || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='firstName' label="First Name"  value={userData.firstName || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='lastName' label="Last Name"  value={userData.lastName || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='emailId' label="Email Id"  value={userData.emailId || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        <TextField id="outlined-basic" name='phone' label="Phone"  value={userData.phone || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
   </Grid>

   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: itemWidth }} >
        Locked At: 
     </FormControl>
   </Grid>
   </Grid>
   </Card>

   <Box
      sx={{
        display: 'flex',        // Use flexbox
        justifyContent: 'space-between', // Space between the cards
        flexWrap: 'wrap',       // Wrap in case of smaller screens
      }}
    >
    <Card
        sx={{
          m: 1,
          width: '44%',
          height: '55vh',
          p: 2,
          overflow: 'hidden', // Ensure content doesn't spill

        }}
      >
     <Typography variant="h7" sx={{m: 1, p: 1}} gutterBottom>
          Roles
        </Typography>         
    <TransferList />
    </Card>
    <Card
        sx={{
          m: 1,
          width: '44%',
          height: '55vh',
          p: 2,
          overflow: 'hidden', // Ensure content doesn't spill

        }}
      >
      <Typography variant="h7" gutterBottom>
          Organizations
        </Typography>    
    <TransferList />
    </Card>
    </Box>

    <Box  sx={{
        display: 'flex',        // Use flexbox
        justifyContent: 'space-between', // Space between the cards
        flexWrap: 'wrap',       // Wrap in case of smaller screens
        mt:2,
        p:2
        
      }}>

<Button sx={{ml: 2}}
      component={Link}  // Use react-router's Link as the base component
      to="/accessmanagement/users" // Target path for navigation
      variant="outlined"
      color="primary"
    >
      Cancel
    </Button>

<Button sx={{ml: 2}}
      component={Link}  // Use react-router's Link as the base component
      to="/accessmanagement/saveUser" // Target path for navigation
      variant="outlined"
      color="primary"
    >
      Save
    </Button>

    <Button sx={{ml: 2}}
      component={Link}  // Use react-router's Link as the base component
      onClick={clearAllDetails}
      variant="outlined"
      color="primary"
    >
      Reset
    </Button>     

    </Box>
   </Grid>
  )
}
