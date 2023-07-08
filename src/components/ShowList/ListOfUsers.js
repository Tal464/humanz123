import React from 'react';
import Card from '@mui/material/Card';
import MakeTable from './MakeTableForData';

const ListOfUsers = () => {
    return (
        <Card sx={{
            background: 'transparent',
            height: 'inherit',
            border: '1px solid black',
        }}>
            <MakeTable/>
        </Card>
    );
};
export default ListOfUsers;