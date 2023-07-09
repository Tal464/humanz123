import { TableContainer, TableRow, TableCell, Button } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { deleteUser } from '../../DAL/server-requests/usersDAL';

const OnClickRow = (props) => {
  const [wantsToDelete, setWantsToDelete] = useState(false);
  const { user } = props;
  const onClick = () => {
    setWantsToDelete(true);
  };

  const handleConfirm = (event) => {
    event.stopPropagation();
    setWantsToDelete(false);
    const userID = user['ID'];
    // deleteUser(userID);
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setWantsToDelete(false);
  };

  return (
    <div onClick={onClick}>
      <TableContainer style={{ display: 'flex', fontSize: '10px', width: '410px', height: '50px' }}>
        <TableRow key={props.i}>
          <TableCell>{props.user['Full Name']}</TableCell>
          <TableCell>{props.user['Email']}</TableCell>
          <TableCell>{props.user['ID']}</TableCell>
          <TableCell>{props.user['Phone number']}</TableCell>
          <TableCell>{props.user['IP address']}</TableCell>
          {/* <TableCell>
            <Tooltip title="Delete">
              <img src={deleteIcon} onClick={onClick} />
            </Tooltip>
          </TableCell> */}
        </TableRow>
        <div />
      </TableContainer>
      {wantsToDelete && (
        <Box sx={{position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,}}>
          <p>Delete this user?</p>
          <Button size="small" style={{ marginRight: 20 }} variant="outlined" onClick={handleConfirm}>
            Delete
          </Button>
          <Button size="small" variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      )}
    </div>
  );
};

export default OnClickRow;
