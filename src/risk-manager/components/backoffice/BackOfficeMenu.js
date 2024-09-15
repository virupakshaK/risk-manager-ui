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
    
    const backOfficeMenuList = [{titile:'Policy Manager', icon: PolicyIcon, subMenu: [
                                                                                    { title: 'List Users', icon: PlaylistAddCircleIcon, path:'/main/listusers'},
                                                                                    { title: 'List rules', icon: PlaylistAddCircleIcon, path:'/main/listrules'},
                                                                                  ]},
                                {titile:'Audit Trail', icon:AutoStoriesIcon, path:'/main/audittrail'}, 
                                {titile:'configuration', icon:PermDataSettingIcon, path: '/main/configuration'}, 
                                {titile:'Settings', icon:SettingsIcon, path: '/main/settings'}
                              ]
    const [expandedMenu, setExpandedMenu] = useState(null);
    const handleClick = (index) => {
      // Toggle the current menu item
      setExpandedMenu(expandedMenu === index ? null : index);
    };
  return (
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
           <ListItemText primary={item.titile} sx={{ opacity: open ? 1 : 0 }} />
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
           <ListItemText primary={item.titile} sx={{ opacity: open ? 1 : 0 }} />
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
                      {subItem.icon && <subItem.icon />}
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
  );
};
export default BackOfficeMenu;