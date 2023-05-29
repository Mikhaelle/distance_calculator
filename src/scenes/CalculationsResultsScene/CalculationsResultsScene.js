import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Header} from '../../components/header/Header'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';


export const  CalculationsResultsScene = () => {
  const navigate = useNavigate();

  const [storedSearchedInfosList, setStoredSearchedInfosList] = useState(null);

  useEffect(() => {
    searchInfosInLocalStorage()
  }, []);

  const searchInfosInLocalStorage = () => {
    const storedSearchedString = localStorage.getItem('searchedDistanceInfos');
    const storedSearchedList = JSON.parse(storedSearchedString);
    setStoredSearchedInfosList(storedSearchedList)
  }

  const handleNavigate = () => {
    navigate('/');
  }

  return (
      <>
        <Header />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Source Address</TableCell>
                <TableCell>Destination address</TableCell>
                <TableCell>Distance (km)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {storedSearchedInfosList?.map((row) => (
                  <TableRow
                      key={row.souceAddress}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.sourceAddress}
                    </TableCell>
                    <TableCell>{row.destinationAddress}</TableCell>
                    <TableCell>{row.distance}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{padding:"30px"}}
        >
          <Button variant="contained" disableElevation sx={{color:'#eeeee4', backgroundColor:'#e28743'}}
                  onClick={() => {
                    handleNavigate();
                  }}>
            Go back
          </Button>
        </Grid>
       
      </>
  );
}