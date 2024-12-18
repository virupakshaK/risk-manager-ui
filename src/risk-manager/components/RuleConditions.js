import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Box, Typography, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';
//import axios from 'axios';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import useBreakpoints from './useBreakpoints';

const operators = ["AND", "OR"];
const fields = ["Name", "Age", "Country"];
const conditions = ["Equals", "Not Equals", "Contains"];

const RuleConditions = ({ data, setData }) => {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  const [query, setQuery] = useState({ ...data });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 

  const addCondition = (group) => {
    group.conditions.push({ field: "", condition: "", value: "", operator: "" });
    setQuery({ ...query });
    handleConditionChange(query);
  };

  const addGroup = (group) => {
    group.conditions.push({
      operator: group.conditions.length > 0 ? "AND" : "",
      group: { id: Date.now(), conditions: [] },
    });
    setQuery({ ...query });
    console.log(query)
    handleConditionChange(query);
  };
  
  const handleConditionChange = (updatedConditions) => {
    setData({ ...data, ...updatedConditions });
  };

  const updateCondition = (group, index, key, value) => {
    group.conditions[index][key] = value;
    setQuery({ ...query });
    handleConditionChange(query);
    
  };

  const confirmRemove = (group, index) => {
    setItemToRemove({ group, index });
    setDialogOpen(true);
  };

  const handleRemove = () => {
    const { group, index } = itemToRemove;
    group.conditions.splice(index, 1);
    setQuery({ ...query });
    handleConditionChange(query);
    setDialogOpen(false);
    setItemToRemove(null);
  };


  const renderConditions = (group) => {


    return group.conditions.map((q, index) => (
      <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        {"group" in q ? (
          <>
            <Select
              value={q.operator}
              onChange={(e) => updateCondition(group, index, "operator", e.target.value)}
              sx={{ marginRight: 2 }}
            >
              {operators.map(operator => (
                <MenuItem key={operator} value={operator}>{operator}</MenuItem>
              ))}
            </Select>
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 1 }}>
              {renderConditions(q.group)}
              <Tooltip title="Add Contidition">
              <IconButton>
                  <ControlPointIcon color='success' onClick={() => addCondition(q.group)} variant="contained" size="small" sx={{ marginRight: 1 }} />
              </IconButton>
              </Tooltip>
             <Tooltip title="Add Group">
             <IconButton>
                 <PlaylistAddCircleIcon color='success' onClick={() => addGroup(q.group)} variant="contained" size="small" />
            </IconButton> 
            </Tooltip>
            </Paper>

            <Tooltip title="Remove Group">
            <IconButton>
                <DeleteIcon variant="outlined" color="error" onClick={() => confirmRemove(group, index)} />
            </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            {index > 0 && (
              <Select
                value={q.operator}
                onChange={(e) => updateCondition(group, index, "operator", e.target.value)}
                sx={{ marginRight: 2 }}
              >
                {operators.map(operator => (
                  <MenuItem key={operator} value={operator}>{operator}</MenuItem>
                ))}
              </Select>
            )}

            <Select
              value={q.field}
              onChange={(e) => updateCondition(group, index, "field", e.target.value)}
              displayEmpty
              sx={{ marginRight: 2 }}
            >
              <MenuItem value="">Select Field</MenuItem>
              {fields.map(field => (
                <MenuItem key={field} value={field}>{field}</MenuItem>
              ))}
            </Select>

            <Select
              value={q.condition}
              onChange={(e) => updateCondition(group, index, "condition", e.target.value)}
              displayEmpty
              sx={{ marginRight: 2 }}
            >
              <MenuItem value="">Select Condition</MenuItem>
              {conditions.map(condition => (
                <MenuItem key={condition} value={condition}>{condition}</MenuItem>
              ))}
            </Select>

            <TextField
              value={q.value}
              onChange={(e) => updateCondition(group, index, "value", e.target.value)}
              placeholder="Value"
              sx={{ marginRight: 2 }}
              
            />
            <Tooltip title="Remove condition">
            <IconButton>
                <RemoveCircleOutlineIcon variant="outlined" color="error" onClick={() => confirmRemove(group, index)} />
            </IconButton>
            </Tooltip>
          </>
        )}
      </Box>
    ));
  };

  const handleSubmit = (e) => {
    // Convert query to JSON string
   // const queryPayload = JSON.stringify(query);
    e.preventDefault();
    setModalOpen(true); 
  };

  return (
    <Box sx={{    
      width: '95%',
      height: isMd ? '40%' : isLg ? '50%' : '60%',
      maxHeight: isMd ? '40vh' : isLg ? '56vh' : '65vh',
      overflowY: 'auto',
      overflowX: 'auto',
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
  }, }}>
      <Typography variant="h6" >Rule Creation</Typography>
      {renderConditions(query)}
      <Button variant="outlined" onClick={() => addCondition(query)} sx={{ marginRight: 1 }}>
        Add Condition
      </Button>
      <Button variant="outlined" onClick={() => addGroup(query)} sx={{ marginRight: 1 }}>
        Add Group
      </Button>

      <Button variant="outlined" onClick={handleSubmit} >
        Review Rule Conditions
      </Button>

      {/* Modal to display query data */}
    <Dialog 
      open={modalOpen} 
      onClose={() => setModalOpen(false)} 
      maxWidth="md" // Adjust this value as needed
      fullWidth // Makes the dialog full width within the maxWidth
    >
          <DialogTitle>Review Conditions</DialogTitle>
          <DialogContent
                         >
            <Typography>Query Data:</Typography>
            <pre>{JSON.stringify(query, null, 2)}</pre>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={() => setModalOpen(false)} 
              size="large" // Make the button larger
              variant="outlined" 
            >
              Close
            </Button>
            <Button 
              onClick={() => {setModalOpen(false)}} 
              size="large" // Make the button larger
              variant="contained" // You can use "outlined" or "contained" based on your design preference
              color="primary" // Color can be adjusted based on your theme
            >
              Ok
            </Button>
          </DialogActions>
       </Dialog>


      {/* Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>{"Confirm Removal"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this condition or group? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button variant='outlined' onClick={handleRemove} color="error" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RuleConditions;
