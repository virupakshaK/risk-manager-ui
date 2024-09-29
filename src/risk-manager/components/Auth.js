import React, { useState } from 'react'
import { Avatar, Button, Card, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import Background from '../Images/outseer_background.jpg'; // Import using relative path
import LoginLogo from '../Images/Outseer_Logo_3.jpg'
import TitileLogo from '../Images/Outseer_Logo_1.jpg'
import Shield from '../Images/Shield.png';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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


export const Auth = (props) => {
      const navigate = useNavigate();
      const [credentials, setCredentials] = useState({
                                                            username: '',
                                                            password: ''
                                                        })
      const [showPassword, setShowPassword] = useState(false);
      const [error, setError] = useState('');

      

      const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleCredentials = (e) => {
                                        setCredentials((prev) => ({...prev,
                                                        [e.target.name] : e.target.value 
                                                        }))
                                       } 




      const handleLoginSubmit = (e) => {
          e.preventDefault();
          console.log('User Name:'+ credentials.username);
          console.log('Password:'+ credentials.password);

        var apiBaseUrl = "https://myapi.com/auth/"
        //const payload = {...};
        const { username, password } = credentials;
        const { history } = props; // <-- destructure history from props
        //this.props.history.push("/");
        

// After your login action you can redirect with this command:
           navigate('/accessmanagement');
        //if (username && password) {
            // {fetch(apiBaseUrl + 'login', payload)
            //     .then((response) => {
            //         ...
            //     }).then((data) => {
            //       setCredentials({
            //             accessToken: data.accestToken,
            //             authenticated: data.authenticated
            //         });
            //         localStorage.setItem('accessToken', data.accessToken);
            //         if (data.authenticated === true) {
            //             console.log(this.props)
            //             this.props.history.push("/"); // <-- navigate!
            //         }

            //     })
            //     .catch((err) => console.log(err));
//}        }else {
            //console.log("Cannot be Empty");
       // }
    
      }
      const paperStyle = { padding: 20, height: '70vh', width: 830, borderRadius: '10px', margin: 'auto' }
      const avatarStyle = { backgroundColor: '#2e7d32',                            
                            display: 'flex',               // Use flexbox to center content if needed
                            alignItems: 'center',          // Center items vertically (if using flex items)
                            justifyContent: 'center',  
                        }
      const textFieldStyle = {  m: '10px', width: '35ch', height: '10ch' }
      const btnStyle = { margin: 3, borderRadius: 3, width: 100 }

      const titleLogo = {
                            backgroundImage: `url(${TitileLogo})`,
                            height: '90px',
                            width: '100%',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',  // Center the image horizontally and vertically
                            display: 'flex',               // Use flexbox to center content if needed
                            alignItems: 'center',          // Center items vertically (if using flex items)
                            justifyContent: 'center',  
                           padding: '2px'
                                     
                        }

      const loginLogo = {
                          backgroundImage: `url(${LoginLogo})`,
                          height: '200px',
                          width: '100%',
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',  // Center the image horizontally and vertically
                          display: 'flex',               // Use flexbox to center content if needed
                          alignItems: 'center',          // Center items vertically (if using flex items)
                          justifyContent: 'center'       // Center items horizontally (if using flex items)
                        }
      const shieldLogo = {
                          backgroundImage: `url(${Shield})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          height: '40px',
                          width: '40px'
      }
    
    


  return (
    <div>
      <Grid container style={styles.paperContainer} alignItems="center" justifyContent="center">  
      <Paper elevation={4} style={paperStyle}>    
      <Grid container >   

             {/* Left side with logos */}
            <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" sx={{pr: '15px', height: '70vh'}}>
                   <Card elevation={8} sx={{width: '100%', height: '100%'}}>
                       <Grid ><IconButton style={shieldLogo}></IconButton></Grid> 

                        <Grid  style={titleLogo}></Grid>
                        
                        <Grid  style={loginLogo} ></Grid>
                        
                        </Card>
                </Grid>
             


                {/* Right side with form */}
                <Grid item xs={12} md={6} container direction="column" alignItems="center" justifyContent="center" sx={{pr:'3px', height: '70vh'}}>  
                 
                <Card elevation={8} sx={{width: '100%', height: '100%'}}>
                  <Grid item >  
                        <IconButton>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        </IconButton>
                        <Typography variant="h5" gutterBottom>Sign In</Typography>
                        </Grid>
                        <Grid item sx={{mb: '5px'}}>
                            {error &&  <Typography variant='h7' color="red">{error}</Typography>}
                           
                        </Grid>
                    
                        <form onSubmit={handleLoginSubmit} >
                        <Grid item >
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Username"
                                name="username"
                                onChange={handleCredentials}
                                style={textFieldStyle}
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
                                type={showPassword? "text" : "password"}
                                onChange={handleCredentials}
                                style={textFieldStyle}
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
                            </Grid>
                            <Grid item>
                            <Button type="submit" variant="contained" color="success" style={btnStyle}>Login</Button>
                            </Grid>
                        </form>
                        </Card>
                </Grid>
    
      </Grid>
      </Paper>
      </Grid>
    </div>
  )
}
export default Auth;