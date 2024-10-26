import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, Menu, MenuItem, Select, TextField } from '@mui/material';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base';
import { styled } from '@mui/system';
import useBreakpoints from '../useBreakpoints';

export const RuleInfo = ({ data, setData }) => {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
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

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };



  return (
    <Grid container sx={{ width: '95%',
    height: isMd ? '40%' : isLg ? '50%' : '60%',
    maxHeight: isMd ? '40vh' : isLg ? '56vh' : '65vh',
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
    <FormControl sx={{ m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh' }} >
        <TextField id="outlined-basic" name='ruleName' label="Rule Name"  value={data.ruleName || ''} onChange={handleInputChange} variant="outlined" />
     </FormControl>
  </Grid>
   
   <Grid md={4} item> 
   <FormControl sx={{ m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh' }} >
    <InputLabel id="demo-simple-select-autowidth-label">Channel</InputLabel>
     <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select"
      name='channel'
      value={data.channel || ''} onChange={handleInputChange}
      label="Channel"
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 230, // Set a max height for the dropdown
            width: '45vh', 
          },
        },
        sx: {
          '& .MuiMenuItem-root': {
            whiteSpace: 'nowrap',
          },
          '& .MuiPaper-root::-webkit-scrollbar': {
            width: '8px',
          },
          '& .MuiPaper-root::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '4px',
          },
        },
      }}
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
   <FormControl sx={{ m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh' }}>
  <InputLabel id="demo-simple-select-autowidth-label">Event Type</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select"
    value={data.eventType || ''}
    label="Event Type"
    onChange={handleInputChange}
    name="eventType"
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 230, // Set a max height for the dropdown
          width: '45vh', 
        },
      },
      sx: {
        '& .MuiMenuItem-root': {
          whiteSpace: 'nowrap',
        },
        '& .MuiPaper-root::-webkit-scrollbar': {
          width: '8px',
        },
        '& .MuiPaper-root::-webkit-scrollbar-thumb': {
          backgroundColor: '#ccc',
          borderRadius: '4px',
        },
      },
    }}
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
   <FormControl sx={{m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh'  }} >
     <InputLabel id="demo-simple-select-label">Status </InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name='status'
      value={data.status || ''}
      label="Status"
      onChange={handleInputChange}
      required
    >
      <MenuItem value={1}>Work In Progress</MenuItem>
      <MenuItem value={2}>Test</MenuItem>
      <MenuItem value={3}>Production</MenuItem>
  </Select>
  </FormControl>
  </Grid>
   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh'  }} >
     <TextField id="outlined-basic" label="Order" name='order' onChange={handleInputChange} variant="outlined" />
     </FormControl>
     </Grid>
   <Grid md={4} item>
   <FormControl sx={{m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh'  }} >
     <TextField id="outlined-basic" label="Sample Size" name='sampleSize' onChange={handleInputChange} variant="outlined" />
     </FormControl>
     </Grid>
     <Grid md={4} item>
     <FormControl sx={{m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh'  }} >
     <Textarea sx={{width: isMd ? '50vh' : isLg ? '56vh' : '65vh'}} name='description' aria-label="minimum height" onChange={handleInputChange} minRows={2} placeholder="Description 2 rows" />
     </FormControl>
     </Grid>
     <Grid md={4} item>
     <FormControl sx={{m: 1, minWidth: 120, width: isMd ? '50vh' : isLg ? '56vh' : '65vh'  }} >
     <Textarea sx={{width: isMd ? '50vh' : isLg ? '56vh' : '65vh'}} name='comments' aria-label="minimum height" onChange={handleInputChange} minRows={2} placeholder="Comments 2 rows" />
     </FormControl>

     </Grid>
     <Grid md={4} item>


     </Grid>
   
  </Grid>    
  )
}
