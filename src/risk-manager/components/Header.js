import React, { useEffect, useRef, useState } from 'react';
import { AppBar, IconButton, Tab, Tabs, Toolbar, Tooltip, Typography, Menu, MenuItem, ListItemIcon, Divider, TextField, Paper, InputAdornment, Chip, Badge } from '@mui/material';
import { Box} from '@mui/system';
import { AccountCircle, Search } from '@mui/icons-material';
import OutseerLogo from '../Images/Outseer_Logo_3.jpg'
import { useTabContext } from './TabContext';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import { useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import useBreakpoints from './useBreakpoints';
import NotificationWithModal from './backoffice/NotificationWithModal';

const Header = () => {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
    const outseerLogo = { backgroundImage: `url(${OutseerLogo})`,
                          height: '55px',
                          width: '180px',
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginLeft: 2
                        }

    const tabsList = ['AccessManagement', 'CaseManagement', 'BackOffice', 'Admin'];
    const settings = ['default', 'TestOrgShc', 'bbh', 'bbc', 'testOrgSch1btestOutseer'];
    //const [activeTab, setActiveTab] = useState(0);
    const { activeTab, setActiveTab } = useTabContext(); // Access the activeTab and setActiveTab
    const [org, setOrg] = useState('default');
    const truncatedText = org.length > 10 ? org.slice(0, 10) + '...' : org;
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [searchOrg, setSearchOrg] = useState('');
    const [orgs, setOrgs] = useState(settings);
    const inputRef = useRef(null); // Create a ref for the input field
    const navigate = useNavigate();
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
        navigate('/login');
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
                             height: isMd ? '15%': isLg ? '10%' : '10%'
                           }}>
                    <Toolbar>
                        
                          <Box sx={outseerLogo}>

                          </Box>
                       
                            <Tabs  sx={{marginLeft: isMd ? 48 : isLg ? 100 : 100 }} value={activeTab} onChange={(e, value) => setActiveTab(value)} aria-label="basic tabs example"  indicatorColor='secondary'>
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
                                   
                                     
                                     <MenuItem onClick={handleLogout} >
                                     <Typography sx={{justifyContent: 'flex-start'}}> Logged In: Admin</Typography>
                                     <Tooltip title="Logout">
                                        <ListItemIcon  sx={{ ml: 3}}>
                                            <SettingsPowerIcon fontSize='large' />
                                        </ListItemIcon>
                                        </Tooltip>
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
                                        style={{ margin: '5px', width: '215px' }}
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
                                                  selected={item === org}  sx={{justifyContent: 'center'}}>
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
           
                    <Box 
                          sx={{ 
                            position: 'relative', 
                            minHeight: '25px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between'  // Ensure items are spaced appropriately
                          }}
                        >
                           <Tooltip title={org}>
                                <Chip
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '20px',
                                        width: '150px',
                                        bgcolor: 'rgb(0 153 92)',
                                        color: 'white',
                                        zIndex: 1  // Ensure Chip is visible above other elements
                                    }}
                                    label={'Org: ' + truncatedText}
                                />
                           
                           
                            </Tooltip>
                             {/* Render Badge in the same row as Chip */}
                            { true &&
                                      <NotificationWithModal />
                                }
                            </Box>

                    
                                      
                </AppBar>
                
        </React.Fragment>
    );
}

export default Header;