import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import Navbar from "./Navbar";
import GitHub from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";
import project7 from "../images/project7.png";
import project8 from "../images/project8.png";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    background: "#233",
    "& .MuiCard-root":{
      display: "flex",
      flexDirection: "column",
    }
  },
  cardContainer: {
    display: "flex",
    maxWidth: 450,
    margin: "2rem auto",
  }
  
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
              <CardMedia
                component="img"
                alt="project 1"
                height="140"
                image={project1}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Locking status app to Stora Enso ("Running a software project"
                  course)
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  Our team made application that monitors the safety locking
                  statuses of cardboard machines during maintenance break. My
                  main role in the project was to be UI/UX designer.
                </Typography>
              </CardContent>
            <CardActions>
              <Button
                startIcon={<PlayCircleFilledWhiteIcon/>}
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
              <CardMedia
                component="img"
                alt="project 2"
                height="140"
                image={project2}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Spicebay online shop ("Data-Intensive Software Systems"
                  coursework)
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  Group project. We needed to make multi-location and
                  multi-database application. We used Node.js and Express in the
                  implementation. I did the whole UI and most of the coding.
                </Typography>
              </CardContent>
            <CardActions >
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
              <CardMedia
                component="img"
                alt="project 4"
                height="140"
                image={project4}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Corona Tracker
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  During corona lockdown I wanted to develop my programming
                  skills. So, I decided to do Corona Tracker, which is done by
                  following JavaScript Mastery YouTube tutorial. I learnt how to
                  use React and visualize data using Chart.js.
                </Typography>
              </CardContent>
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
              <CardMedia
                component="img"
                alt="project 5"
                height="140"
                image={project5}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Finnkino movies
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  Training and learning more React.js. Handy application to search Finnkino movies (React.js, Material-UI, Finnkino API)
                </Typography>
              </CardContent>
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
              <CardMedia
                component="img"
                alt="project 3"
                height="140"
                image={project3}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Joonas Virmajoki homepage
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  This was my own project. I wanted to learn how to build cool
                  websites and animations. I used React.js and Material-UI.
                </Typography>
              </CardContent>
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
          {/* Project 6 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            className={classes.cardContainer}
          >
              <CardMedia
                component="img"
                alt="project 6"
                height="140"
                image={project6}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Detecting code smells using artificial intelligence
                </Typography>
                <Typography
                  gutterBottom
                  varient="body2"
                  component="p"
                  align="justify"
                >
                  This project was part of my master's thesis. I made a prototype for detecting code smells as well as presented its design and development. The prototype was implemented in the Python programming language, using machine learning, neural networks, and deep learning. 
                </Typography>
              </CardContent>
            
            <CardActions>
              <Button startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://github.com/jvirma/code-smell-prototype" 
                target="_blank"
                >
                Repository
              </Button>
              <Button startIcon={<LibraryBooksIcon/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://lutpub.lut.fi/handle/10024/161673" 
                target="_blank"
                >
                Thesis
              </Button>
              <Button startIcon={<PlayCircleFilledWhiteIcon/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://colab.research.google.com/drive/1KNJn1gzphwtwMj9xQuV9szlziA7OxUFY?usp=sharing" 
                target="_blank"
                >
                Executable
              </Button>
            </CardActions>
          </Grid>
          {/* Project 7 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            p={2}
            className={classes.cardContainer}
          >
              <CardMedia
                component="img"
                alt="project 7"
                height="140"
                image={project7}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  TIMOTEI - SmartPost app
                </Typography>
                <Typography
                  varient="body2"
                  component="p"
                  align="justify"
                  gutterBottom
                >
                  This project was "Object-oriented programming" course final assignment (Java, JavaFX, MySQL).
                </Typography>
              </CardContent>
            
            <CardActions className="portButCl">
              <Button startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://github.com/jvirma/timotei" 
                target="_blank"
                >
                Repository
              </Button>
              <Button p={2} startIcon={<PlayCircleFilledWhiteIcon/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://youtu.be/ipwriK7ufeg" 
                target="_blank"
                >
                Presentation (in finnish)
              </Button>
            </CardActions>
          </Grid>
          {/* Project 8 */}
          <Grid
            item
            component={Card}
            xs={11}
            sm={9}
            md={6}
            p={2}
            className={classes.cardContainer}
          >
              <CardMedia
                component="img"
                alt="project 8"
                height="140"
                image={project8}
              />
              <CardContent class="portCardCl">
                <Typography gutterBottom variant="h5">
                  Multiplayer Snake game
                </Typography>
                <Typography
                  varient="body2"
                  component="p"
                  align="justify"
                  gutterBottom
                >
                  Learned from YouTube tutorial how to develop multiplayer game using Javascript and Socket.io.
                </Typography>
              </CardContent>
            
            <CardActions className="portButCl">
              <Button startIcon={<GitHub/>}
                variant="contained"
                size="small"
                color="default" 
                href="https://github.com/jvirma/multiplayer-snake" 
                target="_blank"
                >
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
