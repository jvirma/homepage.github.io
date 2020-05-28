import React from 'react'
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

// CSS STYLES

const useStyles = makeStyles({
  particlesCanvas: {
    position: "fixed",
    width: "100%",
    height: "100%",
    opacity: "0.2"
  }
});



const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
              }
            },
            move:{
              speed: 1
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                opacity_min: 0.1,
                sync: true
              }
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 0.1,
                size_min: 0,
                sync: false
              }
            }
          }
        }}
      />
    </>
  )
}

export default Home

