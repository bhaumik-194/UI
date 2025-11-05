import React from "react";
import "./Section.css";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";

const Section = () => {
  return (
    <section className="feature-section2">
      <div className="feature-text">
        <h2>
          Elevating Card Programs with <br /> Cutting-Edge Technology
        </h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <a href="#" className="compare-link">
          Compare all Pro features →
        </a>
      </div>

      <div className="feature-images">
        <div className="feature-img-box">
          <img src={Img1} alt="Phone" className="feature-img" />
        </div>
        <div className="feature-img-box">
          <img src={Img2} alt="Dashboard" className="feature-img" />
        </div>
      </div>
    </section>
  );
};

export default Section;
