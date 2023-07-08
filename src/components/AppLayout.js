import React from 'react';
import Grid from '@mui/material/Grid';

const AppLayout = ({ children }) => {
    return (
        <Grid container height={'94vh'} sx={{backgroundColor: 'gray', color: 'white'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} padding={0} height={'7vh'}>
                {children[0]}
            </Grid>
            <Grid item container spacing={1} sx={{ height: '100%' }} style={{ padding: '0px 24px' }}>
                <Grid item xs={6} sm={6} md={6} lg={6} height={'85vh'}>
                    {children[1]}
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} height={'85vh'}>
                    {children[2]}
                </Grid>
            </Grid>
        </Grid>
    );
}
export default AppLayout;