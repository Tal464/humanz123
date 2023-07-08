import { useState, useEffect } from 'react';
import { fetchData } from '../../DAL/server-requests/usersDAL';
import { Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from '@mui/material';

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
      <div>
        <Table>
          <TableHead style={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>IP Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsersList.map((user, i) => (
              <TableRow key={i}>
                <TableCell>{user[0]}</TableCell>
                <TableCell>{user[1]}</TableCell>
                <TableCell>{user[2]}</TableCell>
                <TableCell>{user[3]}</TableCell>
                <TableCell>{user[4]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          page={pageNumber}
          count={currentUsersList.length}
          rowsPerPage={rowsInPage}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </div>
    )
  );
};

export default MakeTable;
