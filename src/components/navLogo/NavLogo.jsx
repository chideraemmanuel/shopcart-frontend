import React from "react";
import "./NavLogo.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const NavLogo = () => {
  return (
    <Link to="/" className="nav-logo">
      <FaShoppingCart />
      <span>ShopCart</span>
    </Link>
  );
};

export default NavLogo;
