import React, { useContext } from "react";
import "./MobileNavigation.scss";
import NavMenu from "../navMenu/NavMenu";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import NavLogo from "../navLogo/NavLogo";
import { NavMenuContext } from "../../contexts/NavMenuContext";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import MobileSearch from "../mobileSearch/MobileSearch";
import { useSelector } from "react-redux";

const MobileNavigation = () => {
  const { setMobileMenuOpen } = useContext(NavMenuContext);
  const { mobileSearchActive, setMobileSearchActive } =
    useContext(SearchContext);

  const { totalItemsInCart } = useSelector((store) => store.cart);

  return (
    <div className="mobile-navigation">
      {!mobileSearchActive && (
        <>
          <NavMenu />

          <div className="mobile-navigation__left">
            <HiOutlineMenuAlt2 onClick={() => setMobileMenuOpen(true)} />
            <NavLogo />
          </div>

          <div className="mobile-navigation__right">
            <button
              className="mobile-navigation__right--search"
              onClick={() => setMobileSearchActive(true)}
            >
              <AiOutlineSearch />
            </button>

            <Link to="/" className="mobile-navigation__right--account">
              <AiOutlineUser />
            </Link>

            <Link to="cart" className="mobile-navigation__right--cart">
              <AiOutlineShoppingCart />
              <span className="mobile-navigation__right--cart_count">
                {totalItemsInCart}
              </span>
            </Link>
          </div>
        </>
      )}

      {mobileSearchActive && <MobileSearch />}
    </div>
  );
};

export default MobileNavigation;
