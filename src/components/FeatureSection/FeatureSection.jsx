import React from "react";
import "./FeatureSection.css";
import Icon1 from '../../assets/Icons-1.png';
import Icon2 from '../../assets/Icons-2.png';
import Icon3 from '../../assets/Icons-3.png';

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-header">
        <h2>Elevating Card Programs with Cutting-Edge Technology</h2>
        <p>
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <a href="#" className="feature-link">
          Compare all Pro features →
        </a>
      </div>

      <div className="feature-cards">
        <div className="feature-card">
          <div className="icon-box">
            <img src={Icon1} alt="icon 1" />
          </div>
          <h3>Globally Accepted</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={Icon2} alt="icon 2" />
          </div>
          <h3>Biometric Integrated</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>

        <div className="feature-card">
          <div className="icon-box">
            <img src={Icon3} alt="icon 3" />
          </div>
          <h3>Fully Secured</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
