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
        <Card sx={{ minWidth: 275 }} style={{ margin: "30px 0px" }}>
        <CardActionArea onClick={handleClickOpen}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Portfolio
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