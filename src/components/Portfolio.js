import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import Navbar from "./Navbar";
import GitHub from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    background: "#233",
    "& .MuiCard-root":{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }
  },
  cardContainer: {
    maxWidth: 450,
    margin: "2rem auto",
    
    
  },
  
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        component="div"
        className={classes.mainContainer}
        alignItems="center"
      >
        <Navbar />
        <Grid
          container
          style={{ background: "#233" }}
          alignItems="stretch"
        >
          {/* Project 1 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Locking status app to Stora Enso ("Running a software project"
                  course)
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                >
                  Our team made application that monitors the safety locking
                  statuses of cardboard machines during maintenance break. My
                  main role in the project was to be UI/UX designer.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                startIcon={<PlayCircleOutlineIcon/>}
                variant="contained"
                size="small"
                color="default"
                href="https://marvelapp.com/3d1860b/screen/53019808"
                target="_blank"
              >
                Demo
              </Button>
            </CardActions>
          </Grid>
          {/* Project 2 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Spicebay online shop ("Data-Intensive Software Systems"
                  coursework)
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                >
                  Group project. We needed to make multi-location and
                  multi-database application. We used Node.js and Express in the
                  implementation. I did the whole UI and most of the coding.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default"
                href="https://github.com/jvirma/spicebay"
                target="_blank"
              >
                Repository
              </Button>
              <Button
                startIcon={<LanguageIcon/>}
                variant="contained"
                size="small"
                color="default"
                href="https://spicebay.herokuapp.com/"
                target="_blank"
              >
                Live website
              </Button>
            </CardActions>
          </Grid>
          
          {/* Project 4 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Corona Tracker
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                >
                  During corona lockdown I wanted to develop my programming
                  skills. So, I decided to do Corona Tracker, which is done by
                  following JavaScript Mastery YouTube tutorial. I learnt how to
                  use React and visualize data using Chart.js.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default"
                href="https://github.com/jvirma/corona-tracker"
                target="_blank"
              >
                Repository
              </Button>
              <Button
                startIcon={<LanguageIcon/>}
                variant="contained"
                size="small"
                color="default"
                href="https://jvirma.github.io/corona-tracker/"
                target="_blank"
              >
                Live website
              </Button>
            </CardActions>
          </Grid>
          {/* Project 5 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 5"
                height="140"
                image={project5}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Finnkino movies
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                >
                  Training and learning more React.js. Handy application to search Finnkino movies (React.js, Material-UI, Finnkino API)
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default"
                href="https://github.com/jvirma/finnkino-movies"
                target="_blank"
              >
                Repository
              </Button>
              <Button
                startIcon={<LanguageIcon/>}
                variant="contained"
                size="small"
                color="default"
                href="https://jvirma.github.io/finnkino-movies/"
                target="_blank"
              >
                Live website
              </Button>
            </CardActions>
          </Grid>
          {/* Project 3 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Joonas Virmajoki homepage
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                >
                  This was my own project. I wanted to learn how to build cool
                  websites and animations. I used React.js and Material-UI.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://github.com/jvirma/homepage" 
                target="_blank">
                Repository
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
