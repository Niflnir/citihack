import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import { Container } from "@mui/system";
import { Grid, TextField, Typography, InputAdornment, FormControl, FormHelperText, InputLabel, MenuItem, Select, Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import PortfolioCardPurchased from "../components/PortfolioCardPurchased";
import "../css/myportfolio.css";

const MyPortfolio = () => {
  const [income, setIncome] = useState(null);
  const [percentIncome, setPercentIncome] = useState(null);
  const [risk, setRisk] = useState(null);
  const [goal, setGoal] = useState(null);
  const [portfolios, setPortfolios] = useState([
    {"name":"Edward","term":"Long Term","risk":"Low Risk","amount": "1M","date":"8/11/2022","period":"one year","returnrate":"+70%","stock":"Bajaj Finserv"},
    {"name":"Norton, Han","term":"Long Term","risk":"Low Risk","amount": "1M","date":"8/11/2022","period":"one year","returnrate":"+25%","stock":"Amazon"},
    // {"name":"Han","term":"Long Term","risk":"Low Risk","amount": "1M","date":"8/11/2022","period":"one year","returnrate":"35%","stock":"Dr Reddys Labs"},
    {"name":"Solo","term":"Long Term","risk":"High Risk","amount": "1M","date":"8/11/2022","period":"one year","returnrate":"-5%","stock":"Google"}]);
  const getPortfolio = () => {
    const id = sessionStorage.getItem('id');
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`http://localhost:3001/api/users/myportfolio/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
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
  }

  useEffect(() => {
    const income = sessionStorage.getItem('income');
    const percentIncome = sessionStorage.getItem('percentIncome');
    const risk = sessionStorage.getItem('risk');
    const goal = sessionStorage.getItem('goal');
    setIncome(income);
    setPercentIncome(percentIncome);
    setRisk(risk);
    setGoal(goal);
  },[])

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
                  My Portfolio 
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
            backgroundColor: 'rgb(227, 227, 227)',
            borderRadius: '15px',
            height: "700px",
            width: "550px",
            mt: "50px",
            display: "flex",
            justifyContent: "center"  
          }}>
            <div className="portfolios">
              <div className="top">
              <Typography fontSize={23}>
                  My Investment Plans
                </Typography>
              </div>
              {portfolios.length!==0?
              portfolios.map((info,index) => (
                <PortfolioCardPurchased key={index} info={info} />
              )):
              <Typography variant="h4">No Portfolios found!</Typography>
              }
            </div>
            </Container>
          </Grid>
      </Grid>
    </div>
  )
}

export default MyPortfolio;
