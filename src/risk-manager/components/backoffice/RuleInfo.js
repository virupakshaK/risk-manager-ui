import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base';
import { styled } from '@mui/system';


export const RuleInfo = () => {
  const [status, setStatus] = useState('');
  const [channel, setChannel] = useState('');
  const [eventType, setEventType] = useState('');

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 40vh;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

const handleChannel = (event) => {
  setChannel(event.target.value)
}
const handleEventType = (event) => {
  setEventType(event.target.value)
}

  return (
    <Grid container sx={{ width: '95%',
                          height: '60vh',
                          maxHeight: '40vh',
                          overflowY: 'auto',
                          overflowX: 'auto',
                          ml: 2,
                          position: 'relative',
                          '&::-webkit-scrollbar': {
                          width: '10px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                          backgroundColor: '#888',
                          borderRadius: '10px',
                      },
                      '&::-webkit-scrollbar-thumb:hover': {
                          backgroundColor: '#555',

                      },
                      '&::-webkit-scrollbar-track': {
                          backgroundColor: '#f1f1f1',
                      }, }}
  >
 
   <Grid md={4} item>
   <FormControl sx={{ m: 1, minWidth: 120, width:'40vh' }} >
     <TextField id="outlined-basic" label="Rule Name" variant="outlined" />
     </FormControl>
     </Grid>
   
   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width:'40vh' }} >
    <InputLabel id="demo-simple-select-autowidth-label">Channel</InputLabel>
     <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select"
      value={channel}
      label="Channel"
      onChange={handleChannel}
    >
      <MenuItem value={1}>ATM</MenuItem>
      <MenuItem value={2}>BRANCH</MenuItem>
      <MenuItem value={3}>CALL_CENTER</MenuItem>
      <MenuItem value={4}>IVR</MenuItem>
      <MenuItem value={5}>MOBILE</MenuItem>
      <MenuItem value={6}>OTHER</MenuItem>
      <MenuItem value={7}>WEB</MenuItem>
  </Select>
  </FormControl>
  </Grid>
   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
    <InputLabel id="demo-simple-select-autowidth-label">Event Type</InputLabel>
     <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={eventType}
      label="Event Type"
      onChange={handleEventType}
    >
      <MenuItem value={1}>ACTIVE CARD</MenuItem>
      <MenuItem value={2}>ADD PAYEE</MenuItem>
      <MenuItem value={3}>CARD PIN CHANGE</MenuItem>
      <MenuItem value={4}>CHANGE ADDRESS</MenuItem>
      <MenuItem value={5}>CHANGE ALERT SETTINGS</MenuItem>
      <MenuItem value={6}>CHANGE AUTH DATA</MenuItem>
      <MenuItem value={7}>CHANGE EMAIL</MenuItem>
      <MenuItem value={8}>CHANGE LIFE QUESTIONS</MenuItem>
      <MenuItem value={9}>CHANGE LOGIN ID</MenuItem>
      <MenuItem value={10}>CHANGE PASSWORD</MenuItem>
      <MenuItem value={11}>CHANGE PHONE</MenuItem>
      <MenuItem value={12}>CHANGE STATEMENT SETTINGS</MenuItem>
      <MenuItem value={13}>CREATE USER</MenuItem>
      <MenuItem value={14}>DEPOSIT</MenuItem>
      <MenuItem value={15}>EDIT PAYEE</MenuItem>
      <MenuItem value={16}>ENROLL</MenuItem>
      <MenuItem value={17}>EXTRA AUTH</MenuItem>
      <MenuItem value={18}>FAILED CHANGE PASSWORD ATTEMPT</MenuItem>
      <MenuItem value={19}>OLB ENROLL</MenuItem>
      <MenuItem value={20}>OPEN NEW ACCOUNT</MenuItem>
      <MenuItem value={21}>OPTIONS TRADE</MenuItem>
      <MenuItem value={22}>PAYMENT</MenuItem>
  </Select>
  </FormControl>
  </Grid>

   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
     <InputLabel id="demo-simple-select-label">Status </InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={status}
      label="Status"
      onChange={handleStatusChange}
      required
    >
      <MenuItem value={1}>Work In Progress</MenuItem>
      <MenuItem value={2}>Test</MenuItem>
      <MenuItem value={3}>Production</MenuItem>
  </Select>
  </FormControl>
  </Grid>
   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
     <TextField id="outlined-basic" label="Order" variant="outlined" />
     </FormControl>
     </Grid>
   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
     <TextField id="outlined-basic" label="Sample Size" variant="outlined" />
     </FormControl>
     </Grid>
     <Grid md={4} item>
     <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
     <Textarea name='description' aria-label="minimum height" minRows={2} placeholder="Description 2 rows" />
     </FormControl>
     </Grid>
     <Grid md={4} item>
     <FormControl sx={{m: 1, minWidth: 120, width:'40vh'  }} >
     <Textarea name='comments' aria-label="minimum height" minRows={2} placeholder="Comments 2 rows" />
     </FormControl>

     </Grid>
     <Grid md={4} item>


     </Grid>
   
  </Grid>    
  )
}
