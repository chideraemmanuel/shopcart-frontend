import React from "react";
import "./Navbar.scss";
import DesktopNavigation from "../../components/desktopNavigation/DesktopNavigation";
import TabletNavigation from "../../components/tabletNavigation/TabletNavigation";
import MobileNavigation from "../../components/mobileNavigation/MobileNavigation";

const Navbar = () => {
  return (
    <nav className="navbar">
      <DesktopNavigation />
      <TabletNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
