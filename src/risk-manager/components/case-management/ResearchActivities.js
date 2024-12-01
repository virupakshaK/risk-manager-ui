import React, { useState } from 'react';
import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Checkbox,
  Typography,
  Divider,
  InputLabel,
  Button,
  Collapse,
} from '@mui/material';
import useBreakpoints from '../useBreakpoints';
import { green } from '@mui/material/colors';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import isBetween from "dayjs/plugin/isBetween";
import { ResearchActivitiesTable } from './ResearchActivitiesTable';
// Extend dayjs with plugins
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);


export const ResearchActivities = () => {

  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  const [filters, setFilters] = useState({
                                            channel: '',
                                            userId: '',
                                            eventId: '',
                                            tag: '',
                                            eventType: '',
                                            timeRanges: '',
                                            duration: ''
                                          });

  const durationArray = ["Last 24 hours", "Last 7 days", "Last 30 days", "Last 90 days"];                                        
  const [selectedOption, setSelectedOption] = useState('all dates');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);

  const filtersList = [
    {name: 'userActivity', label:'User Activity', type: 'dropdown'},
    {name:'userId', label :'User Id', type: 'textField'},
    {name:'customerUserActvitiy', label :'Custom User Activity', type:'textField'},
    {name:'customFact', label :'Custom Fact', type:'textField'},
    {name:'policyAction', label :'Policy Action', type:'textField'},
    {name:'riskScore', label :'RiskScore', type:'textField'},
    {name:'amount', label :'Amount(Default Currency)', type:'dropdown'},
    {name:'eventResolution', label :'Event Resolution', type:'dropdown'},
    {name:'productionRuleId', label :'Production Rule Id', type:'textField'},
    {name:'testRuleId', label :'Test Rule Id', type:'textField'},
    {name:'IpAdress', label :'IP Address', type:'textField'},
    {name:'IpCountry', label :'IP Country', type:'textField'},
    {name:'systemFlagging', label :'System Flagging', type:'textField'},
    {name:'accountId', label :'Account Id', type:'textField'},
    {name:'payeeAccountNumber', label :'Payee Account Number', type:'textField'},
    {name:'backColorLevel', label :'Back Color Level', type:'textField'},
    {name:'deviceAssuranceLevel', label :'Device Assurance Level', type:'dropdown'},
    {name:'deviceId', label :'Device Id', type:'textField'},
    {name:'suspectedRdpTrojanAttack', label :'Suspected RDP trojan Attack', type:'textField'},
    {name:'simId', label :'Sim ID', type:'textField'},
    {name:'hardwareId', label :'Hardware ID', type:'textField'},
    {name:'cookie', label :'Cookie', type:'textField'},
    {name:'clientCookie', label :'Client Cookie', type:'textField'},
    {name:'tags', label :'Tags', type:'dropdown'},
    {name:'paymentType', label :'Payment Type', type:'dropdown'},
    {name:'paymentScheme', label :'Payment Scheme', type:'dropdown'}
  ];

  

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleDateChange = (actionDate, event) => {
    if(actionDate === 'fromDate'){
      console.log('event'+event);
      setFromDate(event)
      return;
    }
    if(actionDate === 'toDate'){
      console.log('event'+event);
      setToDate(event);
      return;
    }
    
  };

  const handleInputChange = (e) => {
    console.log('Name:'+e.target.name);
    console.log('value:'+e.target.value);
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePeriodOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChannelChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedChannels((prev) => [...prev, value]);
    } else {
      setSelectedChannels((prev) => prev.filter((channel) => channel !== value));
    }
  };

  const handleAdditionalFilterChange = (event, name, type) => {
    const { value, checked } = event.target;
  
    console.log(`Name: ${name}, Type: ${type}`);
    if (checked) {
      setSelectedCheckboxes((prev) => [...prev, {'name':name, 'type':type}]);
    } else {
      setSelectedCheckboxes((prev) => prev.filter((checkedItem) => checkedItem.name !== name));
    }
  };

  return (
    <Box  sx={{ width: '100%',
                overflowY: 'auto',
                overflowX: 'auto',
                position: 'relative',
                '&::-webkit-scrollbar': { width: '10px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '10px' },
                '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
                '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },}}>
       {/* Toggle Button */}
       <Button variant="outlined" onClick={toggleCollapse} sx={{ position: 'absolute', top: '12px', right: '25px', zIndex: 1 }}>
        {isCollapsed ? 'Expand All Panels' : 'Collapse All Panels'}
      </Button>            
      {/* First Card */}
      <Card
        sx={{
              m: 1,
              width: '95%',
              p: 2,
              height: isCollapsed ? '10px' : 'auto', // Shrink to header height if minimized
              overflow: 'hidden', // Ensure content doesn't spill
              transition: 'height 0.3s', // Smooth height change
            }}
      >
        <Typography sx={{mb:'1px'}} variant="h6" gutterBottom>
          Time Period 
        </Typography>  
      <Collapse in={!isCollapsed}>

      <Grid container  alignItems="center" direction="row">
     
        
          {/* Radio Buttons */}
          <Grid item md={2}>
            <FormControl component="fieldset" >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedOption}
                onChange={handlePeriodOptionChange}
                
              >
                <FormControlLabel
                  value="all dates"
                  control={<Radio sx={{
                    color: green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }} />}
                  label="All Dates"
                  sx={{pt:'2px'}}
                />
              </RadioGroup>
              </FormControl>
          </Grid>

          {/* Dropdown */}
          <Grid item xs={2} md={2}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={selectedOption}
              onChange={handlePeriodOptionChange}
            >
          <FormControlLabel value="duration" control={<Radio sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }}  />} label="Duration" />
          </RadioGroup>
            
          </Grid>

          {/* Date Time Selectors */}
          <Grid item md={2}>
          <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedOption}
                  onChange={handlePeriodOptionChange}
                >
        <FormControlLabel value="timeRange" control={<Radio sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }} />} label="Time Range" />
           </RadioGroup>
                
          </Grid>
          <Grid item md={6}>
            {selectedOption === 'duration' && (
                                                  <FormControl
                                                  sx={{
                                                    minWidth: 200,
                                                    width: isMd ? '45vh' : isLg ? '56vh' : '65vh',
                                                    maxWidth: 300,
                                                  }}
                                                >
                                                  <InputLabel id="demo-simple-select-autowidth-label">Select Duration</InputLabel>
                                                  <Select
                                                    labelId="demo-simple-select-autowidth-label"
                                                    id="demo-simple-select"
                                                    name="duration"
                                                    value={filters.duration || ''}
                                                    onChange={handleInputChange}
                                                    label="Select Duration"
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
                                                    {durationArray.map((menuItem, index) => (
                                                      <MenuItem
                                                        key={menuItem}
                                                        sx={{
                                                          justifyContent: 'center', // Align text for individual MenuItem
                                                        }}
                                                        value={menuItem}
                                                      >
                                                        {menuItem}
                                                      </MenuItem>
                                                    ))}
                                                    {durationArray.length > 1 &&
                                                      durationArray.map(
                                                        (menuItem, index) =>
                                                          index < durationArray.length - 1 && <Divider key={`divider-${index}`} />
                                                      )}
                                                  </Select>
                                                </FormControl>
                                                
                                            
                                              )}

            {selectedOption === 'timeRange' && (
                              <Grid container spacing={1} direction="row">
                                <Grid item md={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <Box sx={{ width: "100%", maxWidth: 400 }}>
                                    <DateTimePicker
                                      label="From Date and Time"
                                      value={fromDate}
                                      onChange={(event)=>handleDateChange('fromDate', event)}
                                      renderInput={(params) => <TextField {...params} fullWidth />}
                                      maxDateTime={new Date()}
                                    />
                                  </Box>
                                </LocalizationProvider>
                                </Grid>
                                <Grid item md={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  <Box sx={{ width: "100%", maxWidth: 400 }}>
                                    <DateTimePicker
                                      label="To Date and Time"
                                      value={toDate}
                                      onChange={(event)=>handleDateChange('toDate', event)}
                                      renderInput={(params) => <TextField {...params} fullWidth />}
                                      minDateTime={fromDate} // Prevent selecting a date/time earlier than `fromDate`
                                      maxDateTime={new Date()} // Optional: Prevent selecting a future date
                                    />
                                  </Box>
                                </LocalizationProvider>
                                </Grid>
                              </Grid>
                            )}

          </Grid>
             

        </Grid>
        </Collapse>
      </Card>



      {/* Second Card Channel Indicator */}
      <Card
        sx={{
          m: 1,
          width: '95%',
          p: 2,
          height: isCollapsed ? '10px' : 'auto', // Shrink to header height if minimized
              overflow: 'hidden', // Ensure content doesn't spill
              transition: 'height 0.3s', // Smooth height change
        }}
      >
         <Typography variant="h6" gutterBottom>
          Channel Indicator
        </Typography>
        <Collapse in={!isCollapsed}>
       
        <Grid container>
          {[
            'ATM',
            'BRANCH',
            'CALL_CENTER',
            'IVR',
            'MOBILE',
            'OTHER',
            'WEB',
          ].map((label, index) => (
            <Grid  item xs={12} sm={6} md={2} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={label}
                    checked={selectedChannels.includes(label)}
                    onChange={handleChannelChange}
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }}
                  />
                }
                label={label}
              />
            </Grid>
          ))}
        </Grid>
        </Collapse>
      </Card>
     

      {/* Filters card */}
      <Card
        sx={{
          m: 1,
          width: '95%',
          p: 2,
          height: isCollapsed ? '10px' : 'auto', // Shrink to header height if minimized
              overflow: 'hidden', // Ensure content doesn't spill
              transition: 'height 0.3s', // Smooth height change
        }}
      >
        <Typography variant="h6" gutterBottom>
          Defined Filters
        </Typography>
        <Collapse in={!isCollapsed}>
        
        <Grid container spacing={2}>
          {filtersList.map((item, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={item.name}
                    checked={selectedCheckboxes.some((checkbox) => checkbox.name === item.name)}
                    onChange={(event) => handleAdditionalFilterChange(event, item.name, item.type)}
                    sx={{
                      color: green[800],
                      '&.Mui-checked': {
                        color: green[600],
                      },
                    }}
                  />
                }
                label={item.label}
              />
            </Grid>
          ))}
        </Grid>
        </Collapse>
      </Card>

      {selectedCheckboxes.length > 0 && <Card
        sx={{
          m: 1,
          width: '95%',
          p: 2,
          height: isCollapsed ? '10px' : 'auto', // Shrink to header height if minimized
          overflow: 'hidden', // Ensure content doesn't spill
          transition: 'height 0.3s', // Smooth height change
        }}
      >
     <Typography variant="h6" gutterBottom>
          Selected Filters
        </Typography>   
     <Collapse in={!isCollapsed}>   

{
  selectedCheckboxes.map((item, index) => {
    if (item.type === 'textField') {
      return (
        <FormControl
          key={index}
          sx={{
            m: 1,
            minWidth: 120,
            width: isMd ? '45vh' : isLg ? '56vh' : '65vh',
          }}
        >
          <TextField
            id="outlined-basic"
            label={item.name}
            name={item.name}
            onChange={handleInputChange}
            variant="outlined"
          />
        </FormControl>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <FormControl
          key={index}
          sx={{
            m: 1,
            minWidth: 120,
            width: isMd ? '45vh' : isLg ? '56vh' : '65vh',
          }}
        >
          <InputLabel id={`dropdown-label-${index}`}>{item.name}</InputLabel>
          <Select
            labelId={`dropdown-label-${index}`}
            id={`dropdown-${index}`}
            name={item.name}
            value={item.value || ''} // Ensure `item.value` is defined
            label={item.name}
            onChange={handleInputChange}
            required
          >
            <MenuItem value={1}>Work In Progress</MenuItem>
            <MenuItem value={2}>Test</MenuItem>
            <MenuItem value={3}>Production</MenuItem>
          </Select>
        </FormControl>
      );
    }

    return null; // Ensure no invalid JSX is returned if `type` doesn't match
  })
}
</Collapse>
      </Card>}

      {
       formSubmitted && <ResearchActivitiesTable />
      }

    </Box>
  );
};
