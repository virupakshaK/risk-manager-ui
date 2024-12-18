
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessMangementMenu from './access-management/AccessMangementMenu';
import CaseManagementMenu from './case-management/CaseManagementMenu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Tooltip from '@mui/material/Tooltip';
import { useTabContext } from './TabContext';
import BackOfficeMenu from './backoffice/BackOfficeMenu';
import AdminMenu from './admin/AdminMenu';


const drawerWidth = 245;
const appBarHeight = '85px'; // Adjust based on your AppBar height
const minimizedWidth = '60px'; // Width when minimized
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width:  open ? drawerWidth : minimizedWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const LeftDrawerMenu = ({open, onToggleDrawer }) => {

  
    
  
  const { activeTab } = useTabContext(); // Access the activeTab state
  //const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    //setOpen(true);
    onToggleDrawer(true);
  };

  const handleDrawerClose = () => {
    //setOpen(false);
    onToggleDrawer(false);
  };

  return (<Box sx={{display: 'flex'}}>
  
  <Drawer variant="permanent" open={open}  
                              sx={{
                                width: open ? drawerWidth : minimizedWidth,
                                flexShrink: 0,
                                [`& .MuiDrawer-paper`]: {
                                  width:  open ? drawerWidth : minimizedWidth,
                                  boxSizing: 'border-box',
                                  marginTop: appBarHeight, // Push down the Drawer to start below the AppBar
                                },
                              }}>
            <DrawerHeader>
                {open ? (
                  <Tooltip title="Collapse">
                    <IconButton onClick={handleDrawerClose}>
                      <MenuOpenIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title="Expand">
                    <IconButton onClick={handleDrawerOpen}>
                      <ChevronRightIcon />
                    </IconButton>
                  </Tooltip>
                )}
          </DrawerHeader>

    <Divider />
    
      {activeTab === 0 && <AccessMangementMenu open={open} />}
      {activeTab === 1 && <CaseManagementMenu open={open} />}
      {activeTab === 2 && <BackOfficeMenu open={open} />}
      {activeTab === 3 && <AdminMenu open={open} />}
    
    <Divider />
    
  </Drawer>
  
</Box>);
}

export default LeftDrawerMenu