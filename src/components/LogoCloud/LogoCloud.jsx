import React from "react";
import "./LogoCloud.css";
import Logo1 from '../../assets/Logo-1.png';
import Logo2 from '../../assets/Logo-2.png';
import Logo3 from '../../assets/Logo-3.png';
import Logo4 from '../../assets/Logo-4.png';
import Logo5 from '../../assets/Logo-5.png';
import Logo6 from '../../assets/Logo-6.png';
import Logo7 from '../../assets/Logo-7.png';
import Logo8 from '../../assets/Logo-8.png';


function LogoCloud() {
  return (
    <div className="logo-cloud">
      <div className="logo-box">
        <img src={Logo1} alt="Logo 1" />
        <img src={Logo2} alt="Logo 2" />
        <img src={Logo3} alt="Logo 3" />
        <img src={Logo4} alt="Logo 4" />
        <img src={Logo5} alt="Logo 5" />
        <img src={Logo6} alt="Logo 6" />
        <img src={Logo7} alt="Logo 7" />
        <img src={Logo8} alt="Logo 8" />
      </div>
    </div>
  );
}

export default LogoCloud;
