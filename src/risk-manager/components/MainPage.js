import React, { useState } from "react";
import { Box, createTheme, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import LeftDrawerMenu from "./LeftDrawerMenu";
import { Outlet} from "react-router-dom";
import useBreakpoints from './useBreakpoints';

const MainPage = () => {
  
const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
const drawerWidth = 240; // Width of the drawer when opened
const minimizedWidth = 60; // Width of the drawer when minimized
const appBarHeight = isXs ? 'auto' : isSm ? 'auto' : isMd ? '18vh' : isLg ? '12vh': '20vh'; // Height of AppBar (if applicable)


  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to handle drawer state changes
  const handleDrawerToggle = (isOpen) => {
    setDrawerOpen(isOpen);
  };

    return(
      <Box sx={{ display: 'flex', height: `calc(100vh - ${appBarHeight})`, overflow: 'hidden' }}>
      {/* Left Drawer Menu */}
      <LeftDrawerMenu open={drawerOpen} onToggleDrawer={handleDrawerToggle} />

      {/* Main Content Area */}
       <Box   component="main"
              sx={{
                flexGrow: 1,
                p: 2,
                width: {
                  xs: `calc(100% - ${minimizedWidth}px)`, // When the drawer is minimized
                  sm: drawerOpen ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${minimizedWidth}px)`, // When the drawer is open or minimized
                },
                transition: 'width 0.3s ease',
              }}>
           <Paper elevation={10} 
                  sx={{width: '100%', 
                       height: '100%', 
                       mt: 0,
                       display: 'flex',
                       flexDirection: 'column',
                       boxSizing: 'border-box'
                      }}>
            <Typography variant="h6" sx={{pt: '5px', px: 1}}> Main Heading</Typography>

             <Grid container flexDirection={"column"} sx={{ flexGrow: 1, overflow: 'hidden' }}>
                {/* Render the matched route's element */}
                <Outlet />
             </Grid>
           </Paper>
      
        </Box>
        </Box>
    )


}


export default MainPage;