import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__description">
        <div className="description__title">Little Lemon</div>
        <div className="description__subtitle">Chicago</div>
        <div className="description__text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </div>
        <button className="description__button">Reserve a Table</button>
      </div>
      <div className="hero__img">
        <div className="hero__image"></div>
      </div>
    </div>
  );
};

export default Hero;
