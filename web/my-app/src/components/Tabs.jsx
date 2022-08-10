import { useState } from 'react';
import { Box, Container, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SavingsIcon from '@mui/icons-material/Savings';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from 'react-router-dom';

const Tabs = ({ tabValue }) => {
  const [value, setValue] = useState(tabValue);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return( 
    <Container sx={{ 
      background: "white",
    }} 
      disableGutters="true" 
      maxWidth="false"
      style={{"position": "sticky", "top": "0","zIndex":"10"}}
    >
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange}>
            <Tab to="/myportfolio" LinkComponent={Link} sx={{width:"240px"}} icon={<AssignmentIndIcon />} iconPosition="start" label="My Portfolio" value="1" />
            <Tab to="/myinvestments" LinkComponent={Link} sx={{width:"240px"}} icon={<AutoGraphIcon />} iconPosition="start" label="Investment Plans" value="2" />
            <Tab to="/savings" LinkComponent={Link} sx={{width:"240px"}} icon={<SavingsIcon />} iconPosition="start" label="Invest With Savings" value="3" />
          </TabList>
        </Box>
      </TabContext>
    </Box>
    </Container>
  )
}

export default Tabs;
