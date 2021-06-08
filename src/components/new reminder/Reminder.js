import { Box, Button, Dialog,DialogContent, DialogActions, InputAdornment,  TextField } from '@material-ui/core'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import alarmImage from "../assets/alarm.png"
import AddAlertIcon from '@material-ui/icons/AddAlert';
    
import "../../App.css"


const useStyles = makeStyles((theme) => ({
box: {
    width:"100%",
    textAlign:"center",
    padding:theme.spacing(2),
    paddingTop : theme.spacing(1),

}
}));

export default function Reminder({open,setOpen}) {
      const classes =useStyles()
    return (
        <>
        <Dialog open={open} onClose={()=> {setOpen(!open)}}>
        <DialogContent dividers>
            <Box className={classes.box}>
                <img src={alarmImage} alt="Alarm" width="50%"/>
            </Box>
            <Box className={classes.box}>
                
            <TextField label="Reminder" variant="outlined" fullWidth color="secondary" multiline rowsMax="3" 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <AddAlertIcon/>
                  </InputAdornment>
                ),
            }}
            inputProps={{
                maxLength:100,
              }}/>
            </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" style={{color:"#f44336",borderColor:"#f44336"}} onClick={()=> {setOpen(!open)}}>Cancel</Button>
                <Button variant="outlined" style={{color:"#4caf50",borderColor:"#4caf50"}}>Save</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}
