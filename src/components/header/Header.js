import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';

export const Header = () =>{
    return(
        <Box sx={{ bgcolor: '#21130d', height: '100px' , width: '100%'}}>
            <Grid container direction="row" justifyContent="center">
                <Grid item xs={2} alignItems="end">
                    <ModeOfTravelIcon style={{ color: '#e07b39', fontSize: '500%'}}/>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={0} direction="column">
                        <h1 style={{ color: 'white'}}>Distance Calculator</h1>
                        <Box sx={{ bgcolor: '#e07b39', height: '1px', width: '100%'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}