import {React,useState} from 'react'
import { Box, Dialog,DialogContent, DialogActions} from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import alarmImage from "../assets/alarm.png"
import StepsIndicator from "./Steps/StepsIndicator"  
import stepsComp from "./Steps/StepsHandlerComponent"
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
      const [activeStep, setActiveStep] = useState(0);
    return (
        <>
        <Dialog open={open} onClose={()=> {setOpen(!open)}}>
        <DialogContent dividers>
            <Box className={classes.box}>
                <img src={alarmImage} alt="Alarm" width="50%"/>
            </Box>
            <Box className={classes.box}>
                {stepsComp[activeStep]}
            </Box>
            </DialogContent>
            <DialogActions>
                <StepsIndicator activeStep={activeStep} setActiveStep={setActiveStep}/>
            </DialogActions>
        </Dialog>
        </>
    )
}
