import { useState } from "react";
import { Container } from "@mui/system";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [income, setIncome] = useState(null);
  const [percentIncome, setPercentIncome] = useState(null);
  const [risk, setRisk] = useState(null);
  const [goal, setGoal] = useState(null);

  const handleSubmit = () => {
    const email = sessionStorage.getItem("email");
    var payload = {
      email: email,
      income: income,
      percentIncome: percentIncome,
      risk: risk,
      goal: goal,
    };

    sessionStorage.setItem("income", income);
    sessionStorage.setItem("percentIncome", percentIncome);
    sessionStorage.setItem("risk", risk);
    sessionStorage.setItem("goal", goal);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:3001/api/users/quiz", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("id", data.portfolio.id);
      });
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#e7ebf0" }}>
      <Navbar />
      <Container
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          height: "700px",
          width: "550px",
          mt: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid direction="column" container spacing={2}>
          <Grid
            alignSelf="center"
            item
            sx={{
              my: "30px",
            }}
          >
            <Typography fontSize={23}>Portfolio Questionaire</Typography>
          </Grid>
          <Grid
            item
            sx={{
              ml: "30px",
              my: "17px",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Required"
              helperText="Please enter your monthly income"
              variant="standard"
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              ml: "30px",
              my: "17px",
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Required"
              helperText="Please enter the % you willing to invest"
              variant="standard"
              value={percentIncome}
              onChange={(e) => setPercentIncome(parseInt(e.target.value))}
              InputProps={{
                startAdornment: <InputAdornment position="start">%</InputAdornment>,
              }}
            />
          </Grid>
          <Grid
            item
            sx={{
              ml: "30px",
              my: "17px",
            }}
          >
            <FormControl>
              <InputLabel>Risk Index</InputLabel>
              <Select value={risk} label="Risk Index" onChange={(e) => setRisk(e.target.value)}>
                <MenuItem value={"low"}>Low</MenuItem>
                <MenuItem value={"moderate"}>Moderate</MenuItem>
                <MenuItem value={"high"}>High</MenuItem>
              </Select>
              <FormHelperText>Please select your Risk Index</FormHelperText>
            </FormControl>
          </Grid>
          <Grid
            item
            sx={{
              ml: "30px",
              my: "17px",
            }}
          >
            <FormControl>
              <InputLabel>Investment Goal</InputLabel>
              <Select
                value={goal}
                label="Investment Goal"
                onChange={(e) => setGoal(e.target.value)}
              >
                <MenuItem value={"RT"}>Retirement</MenuItem>
                <MenuItem value={"SN"}>Safety Net</MenuItem>
                <MenuItem value={"BP"}>Big Purchase</MenuItem>
                <MenuItem value={"GI"}>General Investing</MenuItem>
              </Select>
              <FormHelperText>Please select your Investment Goal</FormHelperText>
            </FormControl>
          </Grid>
          <Grid
            item
            alignSelf="end"
            sx={{
              mx: "30px",
            }}
          >
            <Button
              onClick={handleSubmit}
              variant="contained"
              endIcon={<SendIcon />}
              to="/myportfolio"
              LinkComponent={Link}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Quiz;
