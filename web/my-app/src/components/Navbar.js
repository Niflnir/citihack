import { Box, Container } from "@mui/material";
import logo from '../assets/Logo.png';

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
        pl:"50px",
        py:"25px"
      }}>
        <img src={logo} alt="Logo"/>
      </Box>
    </Container>
)}

export default Navbar;
