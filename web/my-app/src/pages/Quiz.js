import { shadows, Box, Container } from "@mui/system";
import { Grid, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/system';
import Navbar from "../components/Navbar";
import "../css/quiz.css"

const theme = createTheme({
  typography: {
    fontSize: 20,
  }
});

const Quiz = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor:"#e7ebf0"}}>
      <Navbar /> 
      <Container sx={{
        backgroundColor: 'white',
        borderRadius: '15px',
        height: "75vh",
        width: "40vw",
        mt: "50px",
        display: "flex",
        justifyContent: "center"  
      }}>
        <Grid direction="column" container spacing={3} className="form">
          <Grid item>
            <Typography>
              Portfolio Questionaire
            </Typography>
          </Grid>
          <Grid item>
            <TextField 
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Quiz;
