import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import MainPage from "./MainPage";
import { TabProvider } from './TabContext';



 const Layout = () =>  {

    return(
      <TabProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          
        {/* AppBar/Header */}
        <Header />
        
        {/* Drawer and Main Content Area */}
        <Box> 
  
            <MainPage />
        
        </Box>
       
      </Box>
      </TabProvider>
    )
}

export default Layout;