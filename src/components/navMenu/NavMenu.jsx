import React, { useContext, useEffect } from "react";
import "./NavMenu.scss";
import { FiChevronDown } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { NavMenuContext } from "../../contexts/NavMenuContext";
import NavLogo from "../navLogo/NavLogo";
import NavCategoryLink from "../navCategoryLink/NavCategoryLink";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const { categories } = useContext(CategoriesContext);
  const {
    mobileMenuOpen,
    setMobileMenuOpen,
    mobileDropdownActive,
    setMobileDropdownActive,
  } = useContext(NavMenuContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileDropdownActive(false);
      } else {
        return;
      }
    });
  }, [mobileMenuOpen]);

  return (
    <>
      {mobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => {
            setMobileMenuOpen(false);
            setMobileDropdownActive(false);
          }}
        ></div>
      )}

      <aside className={mobileMenuOpen ? "nav-menu active" : "nav-menu"}>
        <div className="nav-menu__header">
          <AiOutlineClose
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileDropdownActive(false);
            }}
          />
          <NavLogo />
        </div>

        <ul className="nav-menu__links">
          <li>
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileDropdownActive(false);
              }}
            >
              Store
            </Link>
          </li>

          <li className="nav-menu__links--category">
            <span
              className={
                mobileDropdownActive
                  ? "nav-menu__links--category_trigger active"
                  : "nav-menu__links--category_trigger"
              }
              onClick={() => setMobileDropdownActive(!mobileDropdownActive)}
            >
              Category <FiChevronDown />
            </span>

            <ul
              className={
                mobileDropdownActive
                  ? "nav-menu__links--category_dropdown active"
                  : "nav-menu__links--category_dropdown"
              }
            >
              {categories &&
                categories.map((category) => (
                  <li key={category._id}>
                    <NavCategoryLink data={category} />
                  </li>
                ))}
            </ul>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileDropdownActive(false);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default NavMenu;
