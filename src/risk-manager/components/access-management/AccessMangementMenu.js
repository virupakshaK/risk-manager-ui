import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
//import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import { Link } from 'react-router-dom';

 const AccessMangementMenu = ({open}) => {
    const accessManagementMenuList = [{title:'Users', icon:SupervisedUserCircleIcon, path:'/accessmanagement/users'}, 
                                      {title:'Roles', icon:SwitchAccessShortcutAddIcon, path:'/accessmanagement/roles'}, 
                                      {title:'Groups', icon:GroupsIcon, path:'/accessmanagement/groups'}, 
                                      {title:'Organizations', icon:AccountTreeIcon, path:'/accessmanagement/orgs'}
                                    ];
    const [expandedMenu, setExpandedMenu] = useState(null);
    const handleClick = (index) => {
                  // Toggle the current menu item
                  setExpandedMenu(expandedMenu === index ? null : index);
                };
  return (
    <>
    <List>{
    accessManagementMenuList.map((item, index) => (
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
                    <ListItemIcon >
                      {subItem.icon && <subItem.icon fontSize='medium' />}
                    </ListItemIcon>
                    <ListItemText sx={{pl:'2px'}} primary={subItem.title} />
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
  );
}

export default AccessMangementMenu;