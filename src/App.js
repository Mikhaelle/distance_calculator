import React from "react";
import { RouterProvider } from "react-router-dom";
import {Router} from "./Router";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';

export default function App() {
  return (
      <RouterProvider router={Router} />

  );
}
