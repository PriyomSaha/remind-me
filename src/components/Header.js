import React, { useState } from 'react'
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import { Toolbar ,AppBar, Typography,CssBaseline,Button,Box,IconButton, Drawer,List,ListItem, Menu,MenuItem } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Link} from "react-router-dom"

import "../App.css";

const useStyles = makeStyles((theme) => ({
    logo:{
        paddingLeft:'3vh'
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
        },
        toolbar:{
            [theme.breakpoints.down('xs')]:{
                paddingRight : '0px'
            }
        }

}));


function Header() {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
    const toggleDrawer = (()=>{
        setIsDrawerOpen(!isDrawerOpen)
    })

    const [profMenu, setprofMenu] = useState(null)
    const handleProfMenuOpen = (e) =>{setprofMenu(e.currentTarget)}

    const classes =useStyles()
    return (
        <>
            <CssBaseline/>
            <AppBar position='relative' >
                <Toolbar className={classes.toolbar}>
                    <NotificationsActiveRoundedIcon/>
                    <Typography varient='h5'className={classes.logo} style={{flexGrow:'1'}}>
                        Remind Me
                    </Typography>
        {/* Desktop View */}
                    <Box className={classes.sectionDesktop}>
                        <Button component={Link} to="/week">Week</Button>
                        <Button component={Link} to="/month">Month</Button>
                        <Button component={Link} to="/year">Year</Button>
                        <Button onClick={handleProfMenuOpen}>Profile</Button>
                    </Box>
        {/* Mobile View */}
                    <IconButton className={classes.sectionMobile}>
                        <MenuIcon onClick={toggleDrawer}></MenuIcon>
                        <PersonIcon style={{paddingLeft:'1vh'}} onClick={handleProfMenuOpen}/>
                    </IconButton>
                </Toolbar>
                <Drawer anchor={'bottom'} open={isDrawerOpen} onClose ={toggleDrawer}>
                    <List>
                        <ListItem onClick={toggleDrawer} >
                            <Button component={Link} to="/week" style={{flexGrow:'1',justifyContent:'flex-start'}}>With in a Week</Button>
                            <CalendarTodayIcon/>
                        </ListItem>                   
                        <ListItem onClick={toggleDrawer}>
                            <Button component={Link} to="/month" style={{flexGrow:'1',justifyContent:'flex-start'}}>With in a Month</Button>
                            <TodayIcon/>
                        </ListItem>
                        <ListItem onClick={toggleDrawer}>
                            <Button component={Link} to="/year" style={{flexGrow:'1',justifyContent:'flex-start'}}>More than a Month</Button>
                            <DateRangeIcon/>
                        </ListItem>
                    </List>
                </Drawer>
        {/* Profile dropdown Menu */}
                <Menu open={Boolean(profMenu)} anchorEl={profMenu} onClose={()=>setprofMenu(null)}>
                    <MenuItem onClick={()=>setprofMenu(null)}>
                        My Account 
                    </MenuItem>
                    <MenuItem onClick={()=>setprofMenu(null)}>
                        Signout
                    </MenuItem>
                </Menu>
            </AppBar>
        </>
    )
}

export default Header
