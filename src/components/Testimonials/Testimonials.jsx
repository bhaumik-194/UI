import React from "react";
import "./Testimonials.css";
import companyLogo from "../../assets/Company-logo.png";
import avatar from "../../assets/image.jpg";

function Testimonials() {
  return (
    <div className="testimonial-container">
      <img src={companyLogo} alt="Company Logo" className="company-logo" />

      <p className="testimonial-text">
        I had the pleasure of experiencing the next generation of card
        solutions with this incredible product. It’s refreshing to see such
        innovation in the financial industry.
      </p>

      <div className="testimonial-user">
        <img src={avatar} alt="User Avatar" className="user-image" />
        <h4 className="user-name">Nick Babich</h4>
        <p className="user-role">Lead Designer</p>
        <div className="rating-stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
