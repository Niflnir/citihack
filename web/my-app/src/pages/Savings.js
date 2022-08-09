import { Button, Grid } from "@mui/material";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import PaidIcon from '@mui/icons-material/Paid';
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";

const options = {
  chart: {
      height: 500,
      width: 1000,
      backgroundColor: "#e7ebf0"
  },

  title: {
      margin: 40,
      text: 'Project Growth of Savings with Investment Plan',
      style: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
      }
  },

  yAxis: {
      accessibility: {
          rangeDescription: `Range: 2022 to 2032`
      },
      title: {
          text: 'Number of Employees',
          style: {
            fontSize: 17,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman'
          }
      }
  },

  xAxis: {
      accessibility: {
          rangeDescription: `Range: 0 to 100000`
      },
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

  colors: ["#d4a226",  "#E85285", "#6A1B9A"],

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2022
      }
  },

  series: [{
      name: '50%',
      data: [500, 600, 1000, 1800, 3000]
  }, {
      name: '75%',
      data: [500, 800, 2000, 5000, 10000]
  }, {
      name: '100%',
      data: [500, 1000, 2500, 7000, 20000]
  }],

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

const Savings = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor:"#e7ebf0"}}>
      <Navbar /> 
      <Tabs tabValue={"3"}/>
      <Grid direction="column" container sx={{pt:4}}>
        <Grid item alignSelf="center">
          <HighchartsReact highcharts={Highcharts} options={options}/>
        </Grid>
        <Grid item alignSelf="center" sx={{pt:8, pr:4.5}}>
            <Button
              variant="contained" 
              startIcon={<PaidIcon/>}
              size="large"
            >
              Invest
            </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Savings;
