import { Card, CardActionArea, CardContent, Typography, Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import React from "react";


function SimpleDialog({ onClose, selectedValue, open }) {
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        
      </Dialog>
    );
  }

export default function PortfolioCard({name}){
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("penis");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

return(    
    <>
        <Card sx={{ minWidth: 275 }} style={{ margin: "30px 0px" }}>
        <CardActionArea onClick={handleClickOpen}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        <SimpleDialog selectedValue={name} open={open} onClose={handleClose} />
    </>
)
}