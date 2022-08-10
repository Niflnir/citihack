import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PaidIcon from '@mui/icons-material/Paid';
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import { useEffect, useState } from 'react';
import { Button, Grid, FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

let options = {
  chart: {
      height: 500,
      width: 1200,
      backgroundColor: "#e7ebf0"
  },

  title: {
      margin: 40,
      text: 'Growth of Savings',
      style: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
      }
  },

  yAxis: {
      title: {
          text: 'Amount',
          style: {
            fontSize: 17,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman'
          }
      },
      max: 60000
  },

  xAxis: {
      title: {
          text: 'Year',
          style: {
            fontSize: 17,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman'
          }
      }
  },

  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  colors: ["#E85285", "#6A1B9A"],

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2022
      }
  },

  responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            }
        }
    }]
  }
}

const calculate = (startAmount) => {
    const dataArray1 = [];
    const dataArray2 = [];
    let multiplier1 = 1.0;
    let multiplier2 = 1.0;
    for(let i = 0; i < 10; i++){
      dataArray1.push(Math.round(startAmount * multiplier1));
      dataArray2.push(Math.round(startAmount * multiplier2));
      multiplier1 += 0.1 + i;
      multiplier2 += 0.2 + i*(i/2);
    }
    options.series = [{
        name: 'with investment',
        data: dataArray2
      },{
        name: 'without investment',
        data: dataArray1
    }]
}

const Savings = () => { 
  const [amount, setAmount] = useState("low");
  const savingsArray = [100, 300, 500];

  const handleChange = (e) => {
    const startAmount = e.target.value === "low" ? savingsArray[0] : e.target.value === "medium" ? savingsArray[1] : savingsArray[2];
    setAmount(e.target.value);
    calculate(startAmount);
  }

  useEffect(() => {
    const startAmount = savingsArray[0];
    calculate(startAmount);
  }, [])
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#e7ebf0",
    }}>
      <Navbar /> 
      <Tabs tabValue={"3"}/>
      <div style={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'row',
      }}>
      <Grid direction="column" container sx={{pt:4}}>
        <Grid item alignSelf="center">
          <HighchartsReact highcharts={Highcharts} options={options} updateArgs={[true]}/>
        </Grid>
        <Grid item alignSelf="center" sx={{pt:9, pr:4.5}}>
          <Grid direction="row" container spacing={30}>
            <Grid item>
              <FormControl>
                <InputLabel>Amount</InputLabel>
                <Select
                  value={amount}
                  label="Amount"
                  onChange={handleChange}
                >
                  <MenuItem value={"low"}>{savingsArray[0]}</MenuItem>
                  <MenuItem value={"medium"}>{savingsArray[1]}</MenuItem>
                  <MenuItem value={"high"}>{savingsArray[2]}</MenuItem>
                </Select>
                <FormHelperText>Amount of savings invested per month</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item alignSelf="center" sx={{pt:10, pr:4.5}}>
              <Button
                variant="contained" 
                startIcon={<PaidIcon/>}
                size="large"
              >
                Invest
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Savings;
