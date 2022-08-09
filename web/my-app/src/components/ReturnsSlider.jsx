import { Slider, Typography } from "@mui/material";



export default function ReturnsSlider({returnRate,setReturnRate}){
    const marks = [
        {
          value: 0,
          label: "0%",
        },
        {
          value: 25,
          label: "25%",
        },
        {
          value: 50,
          label: "50%",
        },
        {
          value: 75,
          label: "75%",
        },
        {
          value: 100,
          label: "100%",
        },
      ];
    function valuetext(value) {
    return `${value}%`;
    }
    
    return(
    <>
        <Typography>Return rate</Typography>
        <Slider
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={5}
            marks={marks}
            valueLabelDisplay="auto"
            value={returnRate}
            onChange={(e) => setReturnRate(e.target.value)}
        />
    </>
    )
}