import React from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">  
      <button className="announcement-content">
        <span className="announcement-badge">Announcement</span>
      </button>
        <span className="announcement-text">
          We are happy to announce that we raise <strong>$2 Million</strong> in Seed Funding
        </span>
    </div>
  );
};

export default AnnouncementBar;
