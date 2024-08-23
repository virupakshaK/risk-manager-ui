import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from './TablePaginationActions'
import { TableHead } from '@mui/material';



  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90},
    { field: 'fullName', headerName: 'Full name', description: 'It is not sortable.', sortable: false, width: 160, valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}` },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 34 },
    { id: 6, lastName: 'Melisandre', firstName: 'Virupaksha', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

 const DataTable = () => {
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };



    return ( <TableContainer component={Paper} sx={{margin: '1%', 
                                                    maxWidth: 1250, 
                                                    marginBottom: '3%', 
                                                    maxHeight: 450, 
                                                    overflowY: 'auto', }}>
       <Table sx={{minWidth: 500}} aria-label="custom pagination table" >
         <TableHead sx={{bgcolor:'#F5F5F5'}}>
         <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.headerName}
                  style={{ top: 20 }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
    
         </TableHead>

         <TableBody>
         {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id} >
              <TableCell scope='row'>
                {row.id}
              </TableCell>
              <TableCell scope="row">
                {row.firstName}
              </TableCell>
              <TableCell   scope="row">
                {row.lastName}
              </TableCell>
              <TableCell scope="row">
                {row.age}
              </TableCell>
              <TableCell  scope="row">
                {row.firstName}
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}

         </TableBody>

         <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
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
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>

       </Table>

   </TableContainer> 
    )
}
export default DataTable;