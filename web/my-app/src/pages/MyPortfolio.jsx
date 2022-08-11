import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import { Container } from "@mui/system";
import { Grid, TextField, Typography, InputAdornment, FormControl, FormHelperText, InputLabel, MenuItem, Select, Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

const MyPortfolio = () => {
  const [income, setIncome] = useState(null);
  const [percentIncome, setPercentIncome] = useState(null);
  const [risk, setRisk] = useState(null);
  const [goal, setGoal] = useState(null);

  const getPortfolio = () => {
    const id = sessionStorage.getItem('id');
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`http://localhost:3001/api/users/myportfolio/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(({income, percentIncome, risk, goal}) => {
        // setIncome(income);
        // setPercentIncome(percentIncome);
        // setRisk(risk);
        // setGoal(goal);
      // })
  }

  function handleSave() {
    const email = sessionStorage.getItem('email');
    var payload =  {
      "email": email,
      "income": income,
      "percentIncome": percentIncome,
      "risk": risk,
      "goal": goal
    };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    fetch('http://localhost:3001/api/users/quiz', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))

    setTimeout(() => {  
      getPortfolio();
    }, 1000);
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor:"#e7ebf0"}}>
      <Navbar /> 
      <Tabs tabValue={"1"}/>
      <Grid container direction="row">
      <Grid item sx={{pl:45}}>
        <Container sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          height: "700px",
          width: "550px",
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
                id="outlined-required"
                label="Monthly Income"
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
                id="outlined-required"
                label="Percentage of Income to Invest"
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
                <Select
                  value={risk}
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
                <Select
                  value={goal}
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
                my: "30px"
              }}
            >
              <Button onClick={handleSave}
                variant="contained" 
                endIcon={<SaveIcon/>}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
        <Grid item sx={{pl:10}}>
        <Container sx={{
          backgroundColor: 'white',
          borderRadius: '15px',
          height: "700px",
          width: "550px",
          mt: "50px",
          display: "flex",
          justifyContent: "center"  
        }}> 
            Hello
        </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default MyPortfolio;
