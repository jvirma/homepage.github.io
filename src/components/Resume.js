import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box, Link} from "@material-ui/core";
import Navbar from './Navbar';
import CountUp from 'react-countup';

const useStyles = makeStyles(theme =>({
  mainContainer: {
    background: "#233"
  },
  timeLine: {
    position: "relative",
    paddomg: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]:{
      padding: "2rem",
      "&:before": {
        left:"calc(50% - 1px)", 
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderColor: "#b34700 #b34700 transparent transparent",
      borderStyle: "solid",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan"
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #b34700 #b34700"
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#b34700",
    color: "white",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "white",
    fontWeight: "bold",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase"
  },
}));


const Resume = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <>
    <Navbar/>
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Timeline
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          <CountUp start={0} end={1994} duration={2}/>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
            Born
          </Typography>
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          <CountUp  end={2010} duration={2}/>-<CountUp end={2013}  duration={2}/>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
          Finnish matriculation examination
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            Joensuun Niinivaaran lukio
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"tan"}}>
          </Typography> 
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
          Research assistant
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            The University of Eastern Finland
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"#ffe0b2"}}>
            Summer jobs (2011-2012). I was part of MOPSI-project. I updated bus schedules with Excel and editing orienteering maps with Photoshop.
          </Typography> 
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
            Groundskeeper
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            The City of Joensuu
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"#ffe0b2"}}>
            Summer job 2013. Gardening work, grass cutting and raking.
          </Typography> 
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
        <CountUp  end={2015} duration={2}/>-<CountUp end={2018}  duration={2}/>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
            Bachelor of Science in Technology
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            LUT University | Computer Science
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"#ffe0b2"}}>
          Modules covered included data structures and algorithms, logic and computation, programming basics (python), object-oriented programming, testing, security basics and many math courses.
          <br/><br/> I wrote my bachelor's thesis on "Tools for analysing social media users to support software development".
          </Typography> 
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
            Summer Project Camp
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            LUT University | Computer Science
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"#ffe0b2"}}>
            Summer job (2016). Bachelor’s degree studies and reporting to supervisor.  
          </Typography> 
        </Box>
        <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
          <CountUp start={0} end={2018} duration={2}/>-NOW
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="h5" aligh="center" className={classes.subHeading}>
            Master of Science in Technology
          </Typography>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            LUT University | Computer Science
          </Typography>
          <Typography variant="subtitle1" aligh="center" style={{color:"#ffe0b2"}}>
          Modules covered included quality assurance, software maintenance, running a software project, data-intensive software systems, user experience design, architectures, AI MOOCs, software models and modelling.
          <br/><br/> I wrote my master's thesis on "Detecting code smells using artificial intelligence - a prototype" which was approved with grade of 5 (excellent). &nbsp; 
          <Link href="https://lutpub.lut.fi/handle/10024/161673" target="_blank" style={{color:"#ffffff"}}>
            {'*Link*'}
          </Link>
          </Typography> 
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography variant="body1" aligh="center" style={{color:"#99ccff"}}>
            Is your company next? Contact!
          </Typography>
        </Box>

      </Box>
      
    </Box>
    </>
  )
}

export default Resume
