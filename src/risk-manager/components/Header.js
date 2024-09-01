import React, { useEffect, useRef, useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Tooltip, Typography, Menu, MenuItem, ListItemIcon, Divider, TextField, Paper, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { AccountCircle, Logout, Search } from '@mui/icons-material';
import OutseerLogo from '../Images/Outseer_Logo_2.png';


const Header = () => {
    
    const outseerLogo = {backgroundImage: `url(${OutseerLogo})`,
                        height: '64px',
                        width: '200px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                        }

    const tabsList = ['AccessManagement', 'CaseManagement', 'BackOffice', 'Admin'];
    const settings = ['default', 'TestOrgShc', "bbh", "bbc", 'testOrgSch1btestOutseer'];
    const [value, setValue] = useState(0);
    const [org, setOrg] = useState('default');
    const truncatedText = org.length > 10 ? org.slice(0, 10) + '...' : org;
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchOrg, setSearchOrg] = useState('');
    const [orgs, setOrgs] = useState(settings);
    const inputRef = useRef(null); // Create a ref for the input field
   
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
        //setOrg(org);
        setSearchOrg('');
        setOrgs(settings);
      };
    const handleMenuItemClick = (selectedOrg) => {
        setOrg(selectedOrg);  // Set the selected menu item value
        handleClose();  // Close the menu
      };

    const handleMenu = (event) => {
        console.log('handle menu')
        setAnchorEl(event.currentTarget);
        setOpen(true);
    }
   
    const handleLogout = () => {
        console.log('handle logout')
        setAnchorEl(null);
        setOpen(false);
    }

    const searchOrgName = (e) => {
        
        let searchTextVal = e.target.value;
        console.log('searchOrgName:'+searchTextVal);
        if(searchTextVal === ""){
            setOrgs(settings);
            setSearchOrg('');
            return
        }
            setSearchOrg(searchTextVal);
            const filterBySearch = settings.filter( orgName => {
                if (orgName.toLowerCase().includes(searchTextVal.toLowerCase())) { 
                    return orgName; 
                }
                
            })
            setOrgs(filterBySearch);
        }
        
        const handleKeyDown = (event) => {
            // Prevent the Menu from automatically selecting items based on keypress
            event.stopPropagation();
            
          }
          useEffect(() => {
            if (inputRef.current) {
              inputRef.current.focus(); // Focus the input field after every render
            }
          }, [orgs]); // Only trigger useEffect when the menu is opened
  

    return (
        <React.Fragment>
           
                <AppBar sx={{background: 'linear-gradient(to bottom, #00995c 50%, #000099 100%)', 
                             position: 'sticky',
                             top: 0, // Ensures it stays at the top of the page
                             zIndex: (theme) => theme.zIndex.drawer + 1,
                           }}>
                    <Toolbar>
                        
                          <Box sx={outseerLogo}>

                          </Box>
                       
                            <Tabs  sx={{marginLeft: 48}} value={value} onChange={(e, value) => setValue(value)} aria-label="basic tabs example"  indicatorColor='secondary'>
                           {tabsList.map((tabText, index) => (<Tab key={index} label={<span style={{ color: 'white' }}>{tabText}</span> }  />) )} 
                            </Tabs>

                            <Tooltip title="Open user profile settings">
                            <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                        sx={{marginLeft: 'auto', color: 'white'}}
                                    >
                                        <AccountCircle />
                           </IconButton>
                           </Tooltip>
                               <Menu
                                    PaperProps={{sx: {width: '232px', maxHeight: '300px', 
                                                                        '&::-webkit-scrollbar': {
                                                                            width: '6px',
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
                                                                        },                              
                                                     }}}
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(open)}
                                    onClose={handleClose}
                                    >
   
                                     <MenuItem onClick={handleLogout}>
                                        <ListItemIcon sx={{color: 'red'}}>
                                            <Logout  fontSize="small" />
                                        </ListItemIcon>
                                        <Typography sx={{color: 'red'}}>Logout</Typography>
                                    </MenuItem>
                                    <Divider />
                            <TextField
                                        inputRef={inputRef}  // Attach the ref to the TextField
                                        placeholder="Search org..."
                                        variant="outlined"
                                        size="small"
                                        onChange={searchOrgName}
                                        onKeyUp={handleKeyDown}
                                        onKeyDown={handleKeyDown} 
                                       
                                        name='searchItem'
                                        value={searchOrg}
                                        style={{ margin: '8px', width: '200px' }}
                                        InputProps={{
                                            endAdornment: (
                                              <InputAdornment position="end">
                                                <Search />
                                              </InputAdornment>
                                            ),
                                            sx: {
                                              '& input': {
                                                textAlign: 'left',  // Align text to the left
                                              },
                                            },
                                          }}
                                        />
                                    {orgs.length === 0 ? (<MenuItem disabled>No Org found</MenuItem>) : (orgs.map((item, index) => (
                                         <div key={index}>
                                        <MenuItem key={index}
                                                  onClick={() => handleMenuItemClick(item)} 
                                                  selected={item === org} >
                                        <Tooltip title={item}>   
                                        <Typography  noWrap>{item}</Typography>
                                        </Tooltip> 
                                        </MenuItem>
                                        {index < settings.length - 1 && <Divider />}
                                        </div>
                                        
                                        ))
                                       )
                                     }    
                                </Menu>
                    </Toolbar>
                    <Paper  elevation={16} 
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '20px',  // Set a height for the Paper component
                        width: '150px',
                        marginLeft: 'auto',
                        marginRight: '3px',   // Optional: margin around the Paper
                        marginBottom: '3px',
                        bgcolor: '#00995c'
                      }}
                    >  

                    
                    <Tooltip title={org}>
                     <Typography variant='h7' sx={{color: 'white',  fontWeight: '500', pl: '2px', pr:'3px'}} noWrap>Org: {truncatedText}</Typography>
                     </Tooltip>
                    </Paper >
                    
                </AppBar>
                
        </React.Fragment>
    );
}

export default Header;