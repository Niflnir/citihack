import { Typography, Button, Select, InputLabel, MenuItem, FormControl, Fab, FormControlLabel, RadioGroup, Radio, FormLabel, ToggleButton, ToggleButtonGroup, Accordion, AccordionSummary, AccordionDetails, Autocomplete, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar";
import "../css/myinvestments.css";
import { useRef, useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Tabs from "../components/Tabs";
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const stocks= [
  'ETSY','PINS','MELI','SQ','SHOP','ISRG','DSK','BRK.A','AMZN','TSLA','AMD','GME'
]

export default function MyInvestments () {
  const [portfolios, setPortfolios] = useState([
    {"name":"Edward","term":"Long Term","risk":"Low Risk","returnrate":"+35%"},
    {"name":"Norton","term":"Long Term","risk":"Low Risk","returnrate":"+30%"},
    {"name":"Han","term":"Long Term","risk":"Low Risk","returnrate":"+5%"},
    {"name":"Solo","term":"Long Term","risk":"High Risk","returnrate":"-35%"}]);
  const [risk, setRisk] = useState(0)
  const [sort, setSort] = useState("high2low")
  const term = useRef("Long Term");

  const handleSort = (event, val) => {
    if (val !== null) {
      setSort(val);
    }
  };
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
            <InputLabel style={{'alignSelf':'center'}}>Sort by:</InputLabel>
            <ToggleButtonGroup exclusive value={sort} onChange={handleSort}>
              <ToggleButton value="high2low">
                <TrendingUpIcon/>
              </ToggleButton>
              <ToggleButton value="low2high">
                <TrendingDownIcon/>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className='inputs'>
            <FormControl >
              <FormLabel>Risk Level: 0 (Lowest) to 5 (Highest)</FormLabel>
              <RadioGroup row 
                value={risk}
                onChange={e=>setRisk(e.target.value)}
              >
                <FormControlLabel style={{'margin':'0px'}} value={0} control={<Radio />} label="0" labelPlacement="bottom"/>
                <FormControlLabel style={{'margin':'0px'}} value={1} control={<Radio />} label='' labelPlacement="bottom"/>
                <FormControlLabel style={{'margin':'0px'}} value={2} control={<Radio />} label='' labelPlacement="bottom"/>
                <FormControlLabel style={{'margin':'0px'}} value={3} control={<Radio />} label='' labelPlacement="bottom"/>
                <FormControlLabel style={{'margin':'0px'}} value={4} control={<Radio />} label='' labelPlacement="bottom"/>
                <FormControlLabel style={{'margin':'0px'}} value={5} control={<Radio />} label="5" labelPlacement="bottom"/>
              </RadioGroup>
            </FormControl>
          </div>
          <div className="inputs">
          <Autocomplete
            style={{"width":'100%'}}
            multiple
            options={stocks}
            getOptionLabel={o=>o}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Stocks to filter by"
                placeholder="Google"
              />
            )}
          />
          </div>
          <div className="inputs">
            <Button variant="text" color="primary" style={{ "fontColor": "blue" }}>
              <FilterListIcon/>
							Clear Filters
            </Button>
            <Fab variant="extended" color="primary" style={{ "minWidth": "40%","zIndex":'0' }}>
              <SearchIcon sx={{ mr: 1 }} />
              Search
            </Fab>
          </div>
        </div>
        <div className="portfolios">
          {portfolios.length!==0?
          portfolios.map((info,index) => (
            <PortfolioCard key={index} info={info} />
          )):
          <Typography variant="h4">No Portfolios found!</Typography>
          }
        </div>
      </div>
    </div>
		</div>
  );
};

