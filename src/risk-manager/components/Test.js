import { AccountCircle } from "@mui/icons-material";
import { Divider, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const Test = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const settings = ['Profile', 'OrgName', 'OrgName2', 'Dashboard', 'TestOrgShc', 'TestOrg1b', 'test'];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleInputChange = (event) => {
    // Prevent the Menu from automatically selecting items based on keypress
    //event.stopPropagation();
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    // Prevent the Menu from automatically selecting items based on keypress
    event.stopPropagation();
    //event.preventDefault();
  };

  return (
    <>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          sx={{ marginLeft: 'auto', color: 'red' }}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { width: '210px' } }}
        >
          <TextField
            autoFocus
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} 
            variant="outlined"
            size="small"
            fullWidth
            sx={{ marginBottom: 1 }}  
          />
          {settings
            .filter((org) => org.toLowerCase().includes(searchText.toLowerCase()))
            .map((item, index) => (
              <MenuItem onClick={handleClose} key={index}>
                {item}
              </MenuItem>
            ))}
          <Divider />
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Test;
