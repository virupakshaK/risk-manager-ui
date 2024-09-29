import React, { useState } from 'react'
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import SettingsIcon from '@mui/icons-material/Settings';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BackOfficeMenu = ({open}) => {
    
    const backOfficeMenuList = [{title:'Policy Manager', icon: PolicyIcon, subMenu: [
                                                                                    { title: 'Manage Rules', icon: PlaylistAddCircleIcon, path:'/backoffice/listrules'},
                                                                                    { title: 'Manage Lists', icon: PlaylistAddCircleIcon, path:'/backoffice/manageLists'},
                                                                                    { title: 'Manage Custom Facts', icon: PlaylistAddCircleIcon, path:'/backoffice/useActivities'},
                                                                                    { title: 'Manage Custom Event Types', icon: PlaylistAddCircleIcon, path:'/backoffice/permissionsList'},
                                                                                    { title: 'Audit Trail', icon:AutoStoriesIcon, path:'/backoffice/audittrail'}
                                                                                  ]},
                                 
                                {title:'Administration', icon:PermDataSettingIcon, subMenu: [{title: 'Manage Configuration', icon: PlaylistAddCircleIcon, path:'/backoffice/configuration'},
                                                                                             {title: 'Key Rotation', icon: PlaylistAddCircleIcon, path:'/backoffice/keyRotation'}]}, 
                                {title:'Customer Service', icon:SettingsIcon, path: '/backoffice/customerService'},
                                {title:'Reports', icon:SettingsIcon, path: '/backoffice/reports'}
                              ]
    const [expandedMenu, setExpandedMenu] = useState(null);
    const handleClick = (index) => {
      // Toggle the current menu item
      setExpandedMenu(expandedMenu === index ? null : index);
    };
  return (
    <>
    <List>{
    backOfficeMenuList.map((item, index) => (
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
      
       
     ))
              }
              </List>
              </>
  );
};
export default BackOfficeMenu;