import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation, BottomNavigationAction
} from "@material-ui/core";
import {
  LinkedIn,
  GitHub,
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
        href="https://github.com/jvirma"
        target="_blank"
      >
      </BottomNavigationAction>
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<LinkedIn/>}
        href="https://www.linkedin.com/in/joonas-virmajoki-188a101a4/"
        target="_blank"
      >
      </BottomNavigationAction>
      <BottomNavigationAction
      className={classes.root}
        style={{padding: 0}}
        icon={<ContactMail/>}
        href="mailto:jorbeful@gmail.com"
        target="_blank"
      >
      </BottomNavigationAction>
      
    </BottomNavigation>
  )
}

export default Footer
