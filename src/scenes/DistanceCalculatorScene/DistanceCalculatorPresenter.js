import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export const DistanceCalculatorPresenter = ({
    sourceAddress,
    setSourceAddress,
    destinationAddress,
    setDestinationAddress,
    handleSearch,
    handleNavigate,
    distanceCalculated
}) => {
    return (
        <Grid sx={{width: '100%', paddingTop: '60px'}}>
            <Grid container alignItems="end" justifyContent="end" sx={{paddingBottom:"30px", paddingRight:'30px'}}>
                <Button variant="contained" disableElevation sx={{color:'#eeeee4', backgroundColor:'#063970'}}
                        onClick={() => {
                            handleNavigate();
                        }}>
                    List search results
                </Button>
            </Grid>
            <Grid container direction="row" justifyContent="center" spacing={5}>
                <Grid item >
                    <Box sx={{width: 400, maxWidth: '100%'}}>
                    <TextField
                        id="outlined-textarea"
                        label="Source destination"
                        placeholder="source address"
                        value={sourceAddress}
                        onChange={(e) => setSourceAddress(e.target.value)}
                        fullWidth
                    />
                    </Box>
                </Grid>
                <Grid item >
                    <Box sx={{width: 400, maxWidth: '100%',}}>
                    <TextField
                        id="outlined-textarea"
                        label="Arrival destination"
                        placeholder="destination address"
                        value={destinationAddress}
                        onChange={(e) => setDestinationAddress(e.target.value)}
                        fullWidth
                    />
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                sx={{padding:"30px"}}
            >
                <Button variant="contained" disableElevation sx={{color:'#eeeee4', backgroundColor:'#e28743'}}
                        onClick={() => {
                            handleSearch();
                        }}>
                    Calculate distance
                </Button>
            </Grid>
            {distanceCalculated &&
            <Grid
                container
                alignItems="center"
                justifyContent="center"
            >
                <h2>{distanceCalculated + " km"}</h2>
            </Grid>}
        </Grid>

    );
};
