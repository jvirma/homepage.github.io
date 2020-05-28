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
  Link,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

const useStyles = makeStyles({
  mainContainer: {
    height: "100%",
    background: "#233",
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
          justify="center"
          alignContent="center"
          alignItems="center"
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
                  color="textSecondary"
                  component="p"
                >
                  Our team made application that monitors the safety locking
                  statuses of a cardboard machines during maintenance break. My
                  main role in the project was to be UI/UX designer.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
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
                  color="textSecondary"
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
                size="small"
                color="primary"
                href="https://github.com/jvirma/spicebay"
                target="_blank"
              >
                Repository
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://spicebay.herokuapp.com/"
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
                  color="textSecondary"
                  component="p"
                >
                  This was my own project. I wanted to learn how to build cool
                  websites and animations. I used React.js and Material-UI.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="#" target="_blank">
                Repository
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
                  color="textSecondary"
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
                size="small"
                color="primary"
                href="https://github.com/jvirma/corona-tracker"
                target="_blank"
              >
                Repository
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://joonasvirmajoki.me/corona-tracker/"
                target="_blank"
              >
                Live website
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
