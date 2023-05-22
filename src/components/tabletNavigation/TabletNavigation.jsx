import React, { useContext } from "react";
import "./TabletNavigation.scss";
import { Link, useNavigate } from "react-router-dom";
import NavLogo from "../navLogo/NavLogo";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import NavMenu from "../navMenu/NavMenu";
import { NavMenuContext } from "../../contexts/NavMenuContext";
import { SearchContext } from "../../contexts/SearchContext";
import { useSelector } from "react-redux";

const TabletNavigation = () => {
  const { setMobileMenuOpen } = useContext(NavMenuContext);
  const { setSearchKeyword, dialogSearch, setDialogSearch } =
    useContext(SearchContext);

  const { totalItemsInCart } = useSelector((store) => store.cart);

  const navigate = useNavigate();

  const setSearchAndNavigate = (e) => {
    e.preventDefault();
    setSearchKeyword(dialogSearch);

    navigate(`/search/${dialogSearch}`);

    setDialogSearch("");
  };

  return (
    <div className="tablet-navigation">
      <NavMenu />

      <div className="tablet-navigation__left">
        <HiOutlineMenuAlt2 onClick={() => setMobileMenuOpen(true)} />
        <NavLogo />
      </div>

      <div className="tablet-navigation__right">
        <form
          className="tablet-navigation__right--search"
          onSubmit={(e) => setSearchAndNavigate(e)}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={dialogSearch}
            onChange={(e) => setDialogSearch(e.target.value)}
          />
          <AiOutlineSearch />
        </form>

        <Link to="/" className="tablet-navigation__right--account">
          <AiOutlineUser />
        </Link>

        <Link to="cart" className="tablet-navigation__right--cart">
          <AiOutlineShoppingCart />
          <span className="tablet-navigation__right--cart_count">
            {totalItemsInCart}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default TabletNavigation;
