import { Grid, Box, Typography, Button, Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import Navbar from "../components/Navbar";
import "../css/myinvestments.css"

const MyInvestments = () => {
    return (
    <div style={{ display:"flex",flexDirection:'column',minHeight: "100vh", backgroundColor:"#e7ebf0"}}>
      <Navbar /> 
      <div className="main-container">
        <div className="sidebar">
            <div className="top">
                <Typography variant="h7">Filter for Portfolios:</Typography>
                <Button variant="Text" color="secondary">Clear Filters</Button>
            </div>
            <div className="inputs">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Term</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Long term</MenuItem>
                        <MenuItem value={20}>Short Term</MenuItem>
                        <MenuItem value={30}>Any</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Risk Level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Risk level"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Low Risk</MenuItem>
                        <MenuItem value={20}>Medium Risk</MenuItem>
                        <MenuItem value={30}>High Risk</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
        <div className="post-list">lll</div>
      </div>
    </div>
    )
}

export default MyInvestments;