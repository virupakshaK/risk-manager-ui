import React, { useState } from "react";
import { Avatar, Button, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Background from './Images/outseer_background.jpg'; // Import using relative path
import LoginLogo from './Images/tree-simple.png';
import Shield from './Images/Shield.png';
import { styled } from '@mui/material/styles';
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { color } from "@mui/system";


  




const styles = {
  paperContainer: {
    flexGrow: 1,

    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  }

};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = () => {

  }
  const paperStyle = { padding: 20, height: '65vh', width: 700, borderRadius: '10px', margin: '50px 250px' }
  const avatarStyle = { backgroundColor: '#2e7d32' }
  const textFieldStyle = {  m: 1, width: '35ch' }
  const btnStyle = { marginTop: 3, borderRadius: 3, width: 100 }
  const loginLogo = {
                      backgroundImage: `url(${LoginLogo})`,
                      height: '450px',
                      width: '350px',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }
  const shieldLogo = {
                      backgroundImage: `url(${Shield})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      height: '40px',
                      width: '40px'
  }


  return (

    <Grid container style={styles.paperContainer}>
      <Paper elevation={10} style={paperStyle}>

        <Grid container flexDirection={"row"} display={"flex"} >
          <Grid md={6} container flexDirection={"column"}  display={"flex"} alignItems={"center"}>
            <Grid  flexDirection={"row"} display={"flex"} >
                 <IconButton style={shieldLogo}></IconButton>
                <Typography  variant="h5" sx={{color: '#2e7d32'}}>OUTSEER</Typography>
            </Grid>
            <Grid  style={loginLogo} md={10} >
            
          </Grid>
          </Grid>
          
          <Grid md={6} display="flex" flexDirection={"column"} alignItems={"center"}>
            
              <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
              <h2>Sign In</h2>
           
              <TextField  margin="normal" type={"text"} label="Username" placeholder="Enter user name" variant="outlined" sx={textFieldStyle} 
              
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              required />
              <TextField  margin="normal" type={showPassword? "text" : "password"} label="Password"  placeholder="Enter password" variant="outlined" sx={textFieldStyle}
              
              InputProps={{
                endAdornment: <InputAdornment position="end">
                       <IconButton  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                 
                  edge="end">
                       {showPassword? <VisibilityOff /> : <Visibility />}

                       </IconButton>
                </InputAdornment>,
              }}
 required
              />

              <Button variant="contained" color="success" sx={btnStyle} >Login</Button>
            


          </Grid>

        </Grid>



      </Paper>

    </Grid>





  )
}

export default Login;