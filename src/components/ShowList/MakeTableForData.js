import { useState, useEffect } from 'react';
import { fetchData } from '../../DAL/server-requests/usersDAL';
import { Box,FormControl, InputAdornment, Input, InputLabel, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';
import OnClickRow from './onClickRow'
const MakeTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsInPage, setRowsPerPage] = useState(20);
  const [filter, setFilter] = useState('');
  const [currentUsersList, setUsersList] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetchDataForPage(pageNumber, rowsInPage, filter);
  }, [pageNumber, rowsInPage, filter]);

  const onPageChange = (event, newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const onRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const onInputChange = (event) => {
    setFilter(event.target.value);
  }

  const fetchDataForPage = (pageNumber, rowsInPage, filter) => {
    fetchData(pageNumber, rowsInPage, filter)
      .then((currentList) => {
        setUsersList(currentList);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err); 
        console.error(err);
      });
  };

  return (
    !isLoading && (
      <div style={{ height: 'inherit', width: 'inherit' }}>
        <div style={{ height: '50px', display: "flex", alignItems: "center" }}>
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Search user by his name
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={filter}
                onChange={onInputChange}
                startAdornment={
                  <InputAdornment position="start"></InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </div>
        <div style={{ height: 'calc(100% - 100px)', overflow: 'auto' }}>
          <Table>
            <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
              <TableContainer style={{ display: 'flex', fontSize: '10px', width: '410px', height: '50px' }}>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>IP Address</TableCell>
                </TableRow>
              </TableContainer>
            </TableHead>
            <TableBody>
              {currentUsersList.map((user, i) => (
                <OnClickRow user={user} i={i}></OnClickRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          page={pageNumber}
          count={'29,000'}
          rowsPerPage={rowsInPage}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </div>
    )
  );
};

export default MakeTable;
