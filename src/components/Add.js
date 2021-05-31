import React, { useState } from 'react'
import {Fab,Container} from "@material-ui/core"
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
    return (
        <>
        <div className={classes.sectionMobile}>
            <Fab color="primary" className={classes.add}>
                <AddIcon/>
            </Fab>
        </div>
        <div className={classes.sectionDesktop}>
        <Fab color="primary" variant="extended" className={classes.add}>
            <AddIcon/> Add Remainder
        </Fab>
    </div>
    </>
    )
}

export default Add
