import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">Seamless experience</p>

        <h1 className="hero-title">
          Unleashing the Next
          <br />
          Generation of Card
          <br />
          Solutions
        </h1>

        <p className="hero-description">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>

        <button className="hero-btn">
          Unlock your Card <span className="arrow">→</span>
        </button>

        <p className="hero-note">*No credit card required</p>
      </div>
    </section>
  );
};

export default Hero;
