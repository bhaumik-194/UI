import React from "react";
import "./CTA.css";
import creditCard from "../../assets/credit-card.png";
import headphones from "../../assets/headphones.png"; 

function CTA() {
  return (
    <div className="cta-container">
      <h1 className="cta-title">
        Unlock Limitless Possibilities with <br />
        Our New Card Solutions
      </h1>

      <div className="cta-buttons">
        <button className="cta-btn primary">
          Unlock your card
          <img src={creditCard} alt="card icon" className="cta-icon" />
        </button>

        <button className="cta-btn secondary">
          Customer support
          <img src={headphones} alt="headphones icon" className="cta-icon" />
        </button>
      </div>
    </div>
  );
}

export default CTA;
