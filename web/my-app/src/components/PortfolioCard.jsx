import { Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, CardActions, Button } from "@mui/material";
import React from "react";
import { useSelector,useDispatch } from 'react-redux'
import { updatePortfolioData } from '../redux/personalDataSlice'


function SimpleDialog({ onClose, info, open }) {
  
    const handleClose = () => {
      onClose();
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{info.name}</DialogTitle>
        
      </Dialog>
    );
  }

export default function PortfolioCard({info}){
    const {name,term,risk,returnrate} = info;
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const count = useSelector((state) => state.personalData.risk)
    const handleSelect = () => {
        dispatch(updatePortfolioData(
            {
            returnRate: returnrate,
            term: term,
            risk: risk,
            }
        ))
    }

    const handleClickOpen = () => {
        console.log(count)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

return(
    <>
        <Card sx={{ minWidth: '90%' }} style={{ margin: "20px 0px" }}>
        <CardActionArea onClick={handleClickOpen}>
            <CardContent style={{'display':'flex','flexDirection':'row','justifyContent':'space-between'}}>
            <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Trader
            </Typography>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Term: {term}
            </Typography>
            <Typography variant="body2">
                Risk level: {risk}
            </Typography>
            </div>
            <div style={{'alignSelf':'center'}}>
            <Typography>1-year performance:</Typography>
            {Array.from(returnrate)[0]==='+'?
            <Typography variant='h5' style={{'color':'green','textAlign':'right'}}>
                {returnrate}
            </Typography>
            :
            <Typography variant='h5' style={{'color':'red','textAlign':'right'}}>
                {returnrate}
            </Typography>
            }
            </div>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={handleSelect}>
            Use this portfolio
            </Button>
        </CardActions>
        </Card>
        <SimpleDialog info={info} open={open} onClose={handleClose} />
    </>
)
}