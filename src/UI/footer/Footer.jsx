import React from "react";
import "./Footer.scss";
import NavLogo from "../../components/navLogo/NavLogo";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__hr"></div>

      <div className="footer__content">
        <NavLogo />

        <span className="footer__content--copyright">
          All Rights Reserved &copy; 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
