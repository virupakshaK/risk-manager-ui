import React, { useState } from 'react';
import { Avatar, Button, Card, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined, AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Background from '../Images/outseer_background.jpg'; // Import using relative path
import LoginLogo from '../Images/Outseer_Logo_3.jpg';
import TitileLogo from '../Images/Outseer_Logo_1.jpg';
import Shield from '../Images/Shield.png';
import { useMediaQuery, createTheme } from '@mui/material';

const styles = {
  paperContainer: {
    flexGrow: 1,
    height: '100vh',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
};

export const Auth = () => {
  const navigate = useNavigate();
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
  //const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Media query for responsiveness
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const isLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  const isXl = useMediaQuery(theme.breakpoints.between('lg','xl'));
  console.log(`isMd: ${isMd}`); // Check if this logs true or false
  //const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  console.log(`isLg: ${isLg}`); // Check if this logs true or false
  //const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  console.log(`isXl: ${isXl}`); // Check if this logs true or false
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleCredentials = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    navigate('/accessmanagement');
  };

  const cardStyle = {
    display: 'flex', // Flexbox for centering content
    flexDirection: 'column', // Ensures content stacks vertically
    justifyContent: 'center', // Vertically centers the content
    alignItems: 'center', // Horizontally centers the content
    width: isXs ? '90%' : isSm ? '100%' : isMd ? '85%' : isLg ? '80%' : '80%', // Different width for different breakpoints
    height: isXs ? 'auto' : isSm ? 'auto' : isMd ? '70vh' : isLg ? '45vh': '70vh',          // Height can be changed similarly
    padding: isXs || isSm ? '10px' : '20px',                                  // Adjust padding for smaller screens

  };
  const textFieldStyle = {
    width: isXs ? '90%' : isSm ? '75%' : isMd ? '90%' : isLg ? '100%' : '80%',
    m: 2
  };


  const avatarStyle = {
    backgroundColor: '#2e7d32',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Grid container style={styles.paperContainer} alignItems="center" justifyContent="center">
      <Paper elevation={4} sx={{ padding: 2, width: isSm ? '75%' : isMd ? '65%' : isLg ? '100%' : '80%', maxWidth: '1200px', borderRadius: '10px', margin: 'auto' }}>
        <Grid container spacing={2}>
          {/* Left side with logos */}
          <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" sx={{ height: '70vh' }}>
            <Card elevation={8} sx={cardStyle}>
              {/* Logo and other components */}
              <IconButton>
                <img src={Shield} alt="Shield" style={{ height: '40px', width: '40px' }} />
              </IconButton>
              <div style={{ backgroundImage: `url(${TitileLogo})`, height: '90px', width: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
              <div style={{ backgroundImage: `url(${LoginLogo})`, height: '200px', width: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
            </Card>
          </Grid>

          {/* Right side with form */}
          <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" sx={{ height: '70vh' }}>
            <Card elevation={8} sx={cardStyle}>
              <IconButton>
                <Avatar style={avatarStyle}>
                  <LockOutlined />
                </Avatar>
              </IconButton>
              <Typography variant="h5" gutterBottom>
                Sign In
              </Typography>
              {error && <Typography variant="h7" color="error">{error}</Typography>}
              <form onSubmit={handleLoginSubmit}>
              <Grid container direction="column" spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Username"
                  name="username"
                  onChange={handleCredentials}
                  sx={textFieldStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                 </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleCredentials}
                  sx={textFieldStyle}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                 </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="success" sx={{ marginTop: 2 }}>
                  Login
                </Button>
                </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Auth;
