import React from "react";
import { Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/system';
import logo from '../assets/Logo.png';

const theme = createTheme({
  palette: {
    background: {
      blue1: '#019BC9',
      blue2: '#00498E',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
  },
});

const Navbar = () => {
  return (
    <Container sx={{ 
      background: "linear-gradient(#019BC9 30%, #00498E)",
      height: "100px"
    }} 
      disableGutters="true" 
      maxWidth="false"
    >
      <Box sx={{
        pl:"40px",
        py:"25px"
      }}>
        <img src={logo} alt="Logo"/>
      </Box>
    </Container>
)}

export default Navbar;
