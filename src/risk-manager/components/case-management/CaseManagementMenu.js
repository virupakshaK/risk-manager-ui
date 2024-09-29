import React, { useState } from 'react'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CaseManagementMenu = ({open}) => {
    const caseManagementMenuList = [{title:'Process Queue', icon:AutoAwesomeMotionIcon, path:'/casemanagement/processqueue'}, 
                                    {title:'Process Custom Queue', icon:DynamicFeedIcon, path:'/casemanagement/customqueue'}, 
                                    {title:'Lookup User', icon:PersonSearchIcon, path:'/casemanagement/lookupuser'}, 
                                    {title: 'View the Queue', icon:AutoAwesomeMotionIcon, path:'/casemanagement/viewTheQueue'},
                                    {title:'Manage', icon:DashboardCustomizeIcon, subMenu: [
                                      { title: 'Operator', icon: PlaylistAddCircleIcon, path:'/casemanagement/operator'},
                                      {title:'Operator Group', icon:DashboardCustomizeIcon, path:'/casemanagement/operatorGroup'},
                                      {title:'Audit Trail', icon:DashboardCustomizeIcon, path:'/casemanagement/auditTrail'}
                                      ] 
                                    },
                                    { title: 'Research Activities', icon: PlaylistAddCircleIcon, path:'/casemanagement/researchActivities'},
                                    
                                  ];

    const [expandedMenu, setExpandedMenu] = useState(null);
    const handleClick = (index) => {
                  // Toggle the current menu item
                  setExpandedMenu(expandedMenu === index ? null : index);
                };                        


  return (
    <>
    <List>{
    caseManagementMenuList.map((item, index) => (
      <ListItem key={index} disablePadding sx={{ display: 'block' }}>
       {/* Check if the item has subMenu */}
       {!item.subMenu ? (
       <ListItemButton
              onClick={() => handleClick(index)} // handleClick is called here
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              component={Link}
              to={item.path}
       >
         <ListItemIcon
           sx={{
             minWidth: 0,
             mr: open ? 3 : 'auto',
             justifyContent: 'center',
           }}
         >
          {item.icon && <item.icon />}   
           
         </ListItemIcon>
         <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
         {/* Add expand/collapse icon only if there are sub-menu items */}
         {item.subMenu && (expandedMenu === index ? <ExpandLess /> : <ExpandMore />)}
       </ListItemButton>) 

       : (<ListItemButton
                onClick={() => handleClick(index)} // handleClick is called here
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
          {item.icon && <item.icon />}   
           
         </ListItemIcon>
         <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
         {/* Add expand/collapse icon only if there are sub-menu items */}
         {item.subMenu && (expandedMenu === index ? <ExpandLess /> : <ExpandMore />)}
       </ListItemButton>)}


       {/* Collapsible Sub-menu */}
       {item.subMenu && (
        <Collapse in={expandedMenu === index} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subMenu.map((subItem, subIndex) => (
              <ListItem key={subIndex} disablePadding sx={{ pl: 4 }}>
                <ListItemButton component={Link} to={subItem.path}>
                  <ListItemIcon>
                    {subItem.icon && <subItem.icon fontSize='medium' />}
                  </ListItemIcon>
                  <ListItemText primary={subItem.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
      </ListItem> 
    
     
   ))}
   </List>
   </>
  )
}
export default CaseManagementMenu;
