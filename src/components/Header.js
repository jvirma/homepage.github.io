import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  Box,
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../images/avatar.jpg";

// CSS STYLES
const useStyles = makeStyles(theme=>({
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  title: {
    color:"white"
  },
  subtitle: {
    color: "#e65c00",
    marginBottom: "3rem"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1
  },
  cursor: {

  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Avatar className={classes.avatar} src={avatar} alt="JoonasV" />
      <Typography className={classes.title} variant="h4">
      Joonas Virmajoki
      </Typography>
      <Typography className={classes.subtitle} variant="h4">
        <Typed strings={["Development", "Testing", "Design", "Maintenance", "MERN Stack", "Mathematics", "Sports"]} typeSpeed={40} backSpeed={60} loop/>
      </Typography>
    </Box>
  )
}

export default Header
