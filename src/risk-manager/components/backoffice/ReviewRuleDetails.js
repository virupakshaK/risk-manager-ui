import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Box } from '@mui/material';
import useBreakpoints from '../useBreakpoints';

// Recursive Component to Render JSON Data
function RecursiveConditionRow({ data }) {
  if (Array.isArray(data)) {
    return data.map((item, index) => (
      <React.Fragment key={index}>
        <RecursiveConditionRow data={item} />
      </React.Fragment>
    ));
  } else if (typeof data === 'object' && data !== null) {
    // Check for nested group condition
    if (data.group) {
      return (
        <>
          <TableRow>
            <TableCell colSpan={4}>
              <Box sx={{ pl: 2, bgcolor: '#f0f0f0', borderRadius: 1, p: 1, mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Group ID: {data.group.id} {data.operator && `(Operator: ${data.operator})`}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', mb: 1 }}>
                  Conditions:
                </Typography>
                <Box sx={{ pl: 2 }}>
                  <RecursiveConditionRow data={data.group.conditions} />
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        </>
      );
    } else {
      // Render a single row for each condition object
      return (
        <TableRow>
          <TableCell sx={{ border: '1px solid #ddd' }}>{data.operator || '-'}</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>{data.field || '-'}</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>{data.condition || '-'}</TableCell>
          <TableCell sx={{ border: '1px solid #ddd' }}>{data.value || '-'}</TableCell>
        </TableRow>
      );
    }
  }
  return null;
}

const ReviewRuleDetails = ({ ruleInfo, ruleConditions }) => {
  const { isMd, isLg } = useBreakpoints();

  return (
    <Grid
      container
      sx={{
        m: 1,
        width: '100%',
        height: isMd ? '38vh' : isLg ? '65vh' : '75%',
        maxHeight: isMd ? '60vh' : isLg ? '75vh' : '85vh',
        overflowY: 'auto',
        overflowX: 'auto',
        position: 'relative',
        '&::-webkit-scrollbar': { width: '10px' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '10px' },
        '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' },
        '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' },
      }}
    >
      {/* Header for Rule Details */}
      <Grid item xs={12} sm={8} md={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Review Rule Details
          </Typography>
        </Box>
      </Grid>

      {/* Table for Rule Info */}
      <TableContainer
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Table component={Paper} sx={{ width: '50%', height: '50%', borderCollapse: 'collapse' }}>
          <TableHead
            sx={{
              bgcolor: '#F5F5F5',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            <TableRow>
             
              <TableCell sx={{ border: '1px solid #ddd' }}>Field Name</TableCell>
              <TableCell sx={{ border: '1px solid #ddd' }}>Field Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(ruleInfo).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell sx={{ border: '1px solid #ddd' }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TableCell>
                <TableCell sx={{ border: '1px solid #ddd' }}>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Header for Rule Conditions */}
      <Grid item xs={12} sm={8} md={12}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Review Conditions
          </Typography>
        </Box>
      </Grid>

      {/* Table for Rule Conditions */}
      {Array.isArray(ruleConditions.conditions) ? (
        <TableContainer component={Paper} sx={{ my: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Operator</TableCell>
                <TableCell>Field</TableCell>
                <TableCell>Condition</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <RecursiveConditionRow data={ruleConditions.conditions} />
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Grid item xs={12} sm={8} md={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              Conditions are not defined
            </Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default ReviewRuleDetails;
