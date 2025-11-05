import React from "react";
import "./Footer.css";
import githubIcon from "../../assets/github.png";
import linkedinIcon from "../../assets/linkedin.png";
import discordIcon from "../../assets/discord.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src="./public/vector.png" alt="Mode UI Logo" className="footer-logo" />
        <p className="footer-description">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Pricing</li>
            <li>Contact us</li>
            <li>Features</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Figma design system</li>
            <li>iOS kit</li>
            <li>Android kit</li>
            <li>Wireframe</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Templates</li>
            <li>Landing pages</li>
            <li>Documentation</li>
            <li>Comp library</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
            <li>Affiliate programme</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help centre</li>
            <li>Raise ticket</li>
            <li>Report</li>
            <li>Refund</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={discordIcon} alt="Discord" />
          </a>
        </div>
        <p>© 2023 Mode UI Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
