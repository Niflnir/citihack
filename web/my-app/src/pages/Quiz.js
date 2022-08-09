import { useState } from 'react';
import { shadows, Box, Container } from "@mui/system";
import { Grid, TextField, Typography, InputAdornment, FormControl, FormHelperText, InputLabel, MenuItem, Select, Button} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import Navbar from "../components/Navbar";

const theme = createTheme({
  typography: {
    fontSize: 20,
  }
});

const Quiz = () => {
  const [income, setIncome] = useState(null);
  const [percentIncome, setPercentIncome] = useState(null);
  const [risk, setRisk] = useState(null);
  const [goal, setGoal] = useState(null);

  const handleSubmit = async () => {

  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor:"#e7ebf0"}}>
      <Navbar /> 
      <Container sx={{
        backgroundColor: 'white',
        borderRadius: '15px',
        height: "75vh",
        width: "30vw",
        mt: "50px",
        display: "flex",
        justifyContent: "center"  
      }}>
        <Grid spacing={3}>
          <div>
            <Typography>
              Portfolio Questionaire
            </Typography>
          </div>
          <div>
            <TextField 
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </div>
        </Grid>
      </Container>
    </div>
  )
}

export default Quiz;
