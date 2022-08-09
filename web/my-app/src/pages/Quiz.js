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
        <Grid direction="column" container spacing={2}>
          <Grid alignSelf="center" 
            item 
            sx={{
              my: "30px",
            }}
          >
            <Typography fontSize={23}>
              Portfolio Questionaire
            </Typography>
          </Grid>
          <Grid item
            sx={{
              ml: "30px",
              my: "17px"
            }}
          >
            <TextField 
              required
              id="outlined-required"
              label="Required"
              helperText="Please enter your monthly income"
              variant="standard"
              value={income}
              onChange={e => setIncome(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    $
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item
            sx={{
              ml: "30px",
              my: "17px"
            }}
          >
            <TextField 
              required
              id="outlined-required"
              label="Required"
              helperText="Please enter the % you willing to invest"
              variant="standard"
              value={percentIncome}
              onChange={e => setPercentIncome(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    %
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item 
            sx={{
              ml: "30px",
              my: "17px"
            }}
          >
            <FormControl>
              <InputLabel>Risk Index</InputLabel>
              <Select
                value={risk}
                label="Risk Index"
                onChange={e => setRisk(e.target.value)}
              >
                <MenuItem value={"low"}>Low</MenuItem>
                <MenuItem value={"moderate"}>Moderate</MenuItem>
                <MenuItem value={"high"}>High</MenuItem>
              </Select>
              <FormHelperText>Please select your Risk Index</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item 
            sx={{
              ml: "30px",
              my: "17px"
            }}
          >
            <FormControl>
              <InputLabel>Investment Goal</InputLabel>
              <Select
                value={goal}
                label="Investment Goal"
                onChange={e => setGoal(e.target.value)}
              >
                <MenuItem value={"RT"}>Retirement</MenuItem>
                <MenuItem value={"SN"}>Safety Net</MenuItem>
                <MenuItem value={"BP"}>Big Purchase</MenuItem>
                <MenuItem value={"GI"}>General Investing</MenuItem>
              </Select>
              <FormHelperText>Please select your Investment Goal</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item 
            alignSelf="end"
            sx={{
              mx: "30px",
              mt: "30px"
            }}
          >
            <Button onSubmit={handleSubmit}
              variant="contained" 
              endIcon={<SendIcon/>}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Quiz;
