import React, { useContext } from "react";
import "./NavCategoryLink.scss";
import { urlFor } from "../../client";
import { Link } from "react-router-dom";
import { NavMenuContext } from "../../contexts/NavMenuContext";

const NavCategoryLink = ({ data: category }) => {
  const { setMobileDropdownActive, setMobileMenuOpen } =
    useContext(NavMenuContext);

  return (
    <Link
      to={`/categories/${category.categoryName}`}
      className="nav-category-link"
      onClick={() => {
        setMobileMenuOpen(false);
        setMobileDropdownActive(false);
      }}
    >
      <img src={urlFor(category.categoryImage)} alt={category.categoryName} />
      <span>{category.categoryName}</span>
    </Link>
  );
};

export default NavCategoryLink;
