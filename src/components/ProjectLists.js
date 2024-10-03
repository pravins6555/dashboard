import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

export default function ProjectLists() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get('/sample.json'); 
        setData(response.data);
        
    };

    fetchData();
  }, []);

  const { table_headers, table_data=[], row_count } = data;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440, maxWidth:950 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
              Rows: {row_count}
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>       
            <TableRow >
              {table_headers && table_headers.map((header, index) => (
                <>
                <TableCell>
                <IconButton aria-label="delete" size="small">{header.name}
                 <DeleteIcon fontSize="inherit" />
                </IconButton>
                    <select >
                    <option value="">{header.type}</option>
                    </select>
                  
                </TableCell>
                </>
                
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
              {table_data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    {row.map((items) => {
                      return (
                        <TableCell>
                          {items}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={table_data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
