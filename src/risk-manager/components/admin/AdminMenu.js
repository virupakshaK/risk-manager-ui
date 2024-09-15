import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SettingsIcon from '@mui/icons-material/Settings';
const AdminMenu = ({open}) => {

    const adminMenu = [{title:'Global Config', icon:EngineeringIcon, path:'/globalconfig'},
                       {title: 'Group Settings', icon:GroupsIcon, path:'/groupsettings'}, 
                       {title:'Settings', icon:SettingsIcon, path:'/settings'}, 
                       {title:'Permissions', icon:HomeWorkIcon}
                      ];

  return (
    adminMenu.map((item, index) => (
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
export default AdminMenu;