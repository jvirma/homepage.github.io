import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation, BottomNavigationAction
} from "@material-ui/core";
import {
  LinkedIn,
  GitHub,
  Instagram,
  ContactMail
} from "@material-ui/icons"
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill:"white",
      "&:hover":{
        fontSize:"2rem"

      }
    }
  },
})


const Footer = () => {
  const classes = useStyles()
  return (
    
    <BottomNavigation width="auto" style={{background:"#222"}}>
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<GitHub/>}
      >
      </BottomNavigationAction>
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<LinkedIn/>}
      >
      </BottomNavigationAction>
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<ContactMail/>}
      >
      </BottomNavigationAction>
      
    </BottomNavigation>
  )
}

export default Footer
