import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import Footer from "./Footer"
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  List,
  Box,
  ListItemIcon,
  MenuItem
} from "@material-ui/core";
import {
  Dehaze,
  AssignmentInd,
  Home,
  Apps,
} from "@material-ui/icons";
import avatar from "../images/avatar.jpg";
import logo2 from "../images/logo5.png";

// CSS STYLES

const useStyles = makeStyles(theme=>({
  menuSliderContainer: {
    width: 250,
    background: "#b34700",
    height: "100%"
  },
  avatar: {
    display: "block",
    margin: "1rem auto 1rem",

    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  divider: {
    backgroundColor: "#cccccc",
    height: "2px"
  },
  listHorizontal: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    }
  },
  parent: {
    fill:"white",
    color:"white",
    '&:hover $child': {
      "& .MuiSvgIcon-root": {
        transform: "scale(1.5)"
      },
      "& .MuiTypography-root": {
        fontWeight: "bold"
      }

    }

  },
  child: {
    "& .MuiSvgIcon-root": {
      fill:"white",
      transition: "0.5s",

    }
  }
}));

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume",
    listPath: "/resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Projects",
    listPath: "/portfolio"
  },
]

const Navbar = () => {
  const [state, setState] = useState({
    right:false
  })
  const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open})
  };

  const classes = useStyles();

  const sideList = slider => (
    <Box 
    className={classes.menuSliderContainer} 
    component="div"
    >

      <Avatar className={classes.avatar} src={avatar} alt="JoonasV"/>
      <Divider className={classes.divider}/>
      <List>
        {menuItems.map((lsItem, key)=>
          <ListItem className={classes.parent} key={key} button onClick={toggleSlider(slider, false)} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.child}>{lsItem.listIcon}</ListItemIcon>
            <ListItemText className={classes.child} primary={lsItem.listText}/>
          </ListItem>
        )}
      </List>
    </Box>
  )

  return (
    <>
    <Box component="nav">
      <AppBar position="static" style={{background:"black"}}>
        <Toolbar>
          <img src={logo2} alt="logo" style={{position:"absolute", left:"50%", top: '50%', transform: 'translate(-50%, -50%)', maxHeight:"50px"}}/>
          <MenuItem className={classes.parent} button onClick={toggleSlider("right", true)}>
            <ListItemIcon className={classes.child}><Dehaze style={{color:"#cc5200"}} /></ListItemIcon>
          </MenuItem>
          <List className={classes.listHorizontal}>
          
            {menuItems.map((lsItem, key)=>
              <ListItem className={classes.parent} key={key} button component={Link} to={lsItem.listPath}>
                <ListItemText className={classes.child} component={Link} to={lsItem.listPath} primary={lsItem.listText}/>
              </ListItem>
            )}
          </List>      
          <MobileRightMenuSlider 
          anchor="right"
          open={state.right}
          onClose={toggleSlider("right", false)}
          >
            {sideList("right")}
            <Footer></Footer>
          </MobileRightMenuSlider>
          
        </Toolbar>
        
      </AppBar>
      
    </Box>
    </>
  )
}

export default Navbar
