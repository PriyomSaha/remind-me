import React,{useState} from 'react'
import Reminder from './Reminder'
import {Fab} from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles'
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({

    add:{
        position:'fixed',
        bottom:'5%',
        right:'5%'
    },
    sectionDesktop:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'flex'
    }
    },
    sectionMobile:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'flex'
        }
        }

}));

function Add() {
    const classes =useStyles()

    const [open, setOpen] = useState(false);
    return (
        <>
        <div className={classes.sectionMobile}>
            <Fab color="primary" className={classes.add} onClick={()=> {setOpen(!open)}}>
                <AddIcon/>
            </Fab>
        </div>
        <div className={classes.sectionDesktop}>
        <Fab color="primary" variant="extended" className={classes.add} onClick={()=> {setOpen(!open)}}>
            <AddIcon/> Add Reminder
        </Fab>
        </div>
        <Reminder open={open} setOpen={setOpen}/>
    </>
    )
}

export default Add
