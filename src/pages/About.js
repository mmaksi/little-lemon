import React from "react";
import "./About.css";
import chef1 from "../assets/chef1.jpg";
import chef2 from "../assets/chef2.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <div className="description__title">Little Lemon</div>
        <div className="description__subtitle about__subtitle">Chicago</div>
        <div className="description__text about__text">
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu with daily specials.
        </div>
      </div>
      <div className="about__images">
        <img className="about__image1" src={chef1} />
        <img className="about__image2" src={chef2} />
      </div>
    </div>
  );
};

export default About;
