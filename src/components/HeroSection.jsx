import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import video1 from "../videos/video-1.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p> What are you waiting for? </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          EXPLORE THE PARKS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
