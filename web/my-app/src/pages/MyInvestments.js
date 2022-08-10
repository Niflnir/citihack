import { Typography, Button, Select, InputLabel, MenuItem, FormControl, Fab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar";
import "../css/myinvestments.css";
import { useRef, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import ReturnsSlider from "../components/ReturnsSlider";
import Tabs from "../components/Tabs";

const MyInvestments = () => {
  const [portfolios, setPortfolios] = useState(["Edward", "Norton","Fred","Love","KK","ll","OPOP"]);
  const [returnRate, setReturnRate] = useState(0);
  const term = useRef("Long Term");
  const risk = useRef("Low Risk");

  return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			height: '100vh',
		}}>
    <div
      style={{
				flex:1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        backgroundColor: "red",
      }}
    >
      <Navbar />
      <Tabs tabValue={"2"} />
      <div className="main-container">
        <div className="sidebar">
          <div className="top">
            <Typography variant="h6">What portfolio are you looking for?</Typography>
          </div>
          <div className="inputs">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Term</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={term.current}
                label="Age"
                onChange={(e) => {
                  term.current = e.target.value;
                }}
              >
                <MenuItem value={"Long Term"}>Long term</MenuItem>
                <MenuItem value={"Short Term"}>Short Term</MenuItem>
                <MenuItem value={"Any"}>Any</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Risk Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={risk.current}
                label="Risk level"
                onChange={(e) => (risk.current = e.target.value)}
              >
                <MenuItem value={"Low Risk"}>Low Risk</MenuItem>
                <MenuItem value={"Medium Risk"}>Medium Risk</MenuItem>
                <MenuItem value={"High Risk"}>High Risk</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="inputs">
            <ReturnsSlider returnRate={returnRate} setReturnRate={setReturnRate} />
          </div>
          <div className="inputs">
            <Button variant="text" color="primary" style={{ "font-color": "blue" }}>
              Clear Filters
            </Button>
            <Fab variant="extended" color="primary" style={{ "min-width": "40%","zIndex":'0' }}>
              <SearchIcon sx={{ mr: 1 }} />
              Search
            </Fab>
          </div>
        </div>
        <div className="portfolios">
          {portfolios.map((name) => (
            <PortfolioCard name={name} />
          ))}
        </div>
      </div>
    </div>
		</div>
  );
};

export default MyInvestments;
