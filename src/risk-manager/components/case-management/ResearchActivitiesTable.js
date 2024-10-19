import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import useBreakpoints from '../useBreakpoints';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'salary', headerName: 'Salary', width: 130 },
  ];

export const ResearchActivitiesTable = () => {
  const { isXs, isSm, isMd, isLg, isXl } = useBreakpoints();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [sortColumn, setSortColumn] = useState('if');  // Default sorting column
  const [sortDirection, setSortDirection] = useState('asc'); // Default sorting order

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = hasMore ? 0 : Math.max(0, rowsPerPage - data.length);

  useEffect(() => {
    fetchData(page, rowsPerPage, sortColumn, sortDirection);
  }, [page, rowsPerPage, sortColumn, sortDirection]);

  const fetchData = async (page, limit, sortColumn, sortDirection) => {
    const offset = page * limit;
    // Call backend API with limit, offset, sortColumn, and sortDirection
    //const response = await fetch(`http:localhost:8181/emp/data/${limit}/${offset}/${sortColumn}/${sortDirection}`);
    try {
        // Make the request using path variables
        const response = await axios.get(`http://localhost:8181/emp/data/${limit}/${offset}/${sortColumn}/${sortDirection}`);
        
        console.log('response:'+response)
        // Process the response data
        const result = response.data;
        console.log(result.data);
        // Assuming you're updating state (if using React)
        setData(result.data);
        setHasMore(result.hasMore);
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }


  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page changes
  };

  const handleRequestSort = (property) => {
    const isAsc = sortColumn === property && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortColumn(property);
  };
  return (
    <Box sx={{display: 'flex'}}>
      <TableContainer                   sx={{     m: 1,
                                                  width: '100%',
                                                  height: isMd ? '65vh' : isLg ? '79vh' : '70%',
                                                  maxHeight: isMd ? '80vh': isLg ? '85vh' : '85vh',
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
       <Table sx={{minWidth: 700}} component={Paper} aria-label="custom pagination table" >
         <TableHead sx={{bgcolor:'#F5F5F5',
                         position: 'sticky',
                         top: 0,
                         zIndex: 1,
                         }}>
         <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.headerName}
                  style={{ minWidth: column.width }} // Set minWidth based on column width
                >
                   <TableSortLabel
                        active={sortColumn === column.headerName}
                        direction={sortColumn === column.headerName ? sortDirection : 'asc'}
                        onClick={() => handleRequestSort(column.headerName)}
              >
               {column.headerName}
              </TableSortLabel>

                  
                </TableCell>
              ))}
            </TableRow>
    
         </TableHead>

         <TableBody>
         {data.map((row) => (
            <TableRow key={row.id} >
              <TableCell scope='row'>
                {row.id}
              </TableCell>
              <TableCell scope="row">
                {row.name}
              </TableCell>
              <TableCell   scope="row">
                {row.salary}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell align='center' colSpan={3} >Records are not available </TableCell>
            </TableRow>
          )}

         </TableBody>
         
         <TableFooter>
          <TableRow sx={{  
                          bottom: 0,
                          position: 'sticky',
                          bgcolor: 'white'
                          }}>
                
          
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={3}
              count={hasMore ? -1 : page * rowsPerPage + data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ disabled: !hasMore }} // Disable next if no more data
              shape="rounded"
              variant='outlined'
            />
  
          </TableRow>
        </TableFooter>
   
       </Table>

   </TableContainer> 
   </Box>
  )
}
