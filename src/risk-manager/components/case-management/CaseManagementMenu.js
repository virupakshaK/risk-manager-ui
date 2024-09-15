import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

const CaseManagementMenu = ({open}) => {
    const caseManagementMenuList = [{title:'Process Queue', icon:AutoAwesomeMotionIcon, path:'/processqueue'}, 
                                    {title:'Custom Queue', icon:DynamicFeedIcon, path:'/customqueue'}, 
                                    {title:'Lookup User', icon:PersonSearchIcon, path:'/lookupuser'}, 
                                    {title:'Manage', icon:DashboardCustomizeIcon, path:'/manage'}
                                  ];


  return (
    caseManagementMenuList.map((item, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              {item.icon && <item.icon /> }
            </ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))
  )
}
export default CaseManagementMenu;
