import React, { useContext } from "react";
import "./DesktopNavigation.scss";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import NavCategoryLink from "../navCategoryLink/NavCategoryLink";
import NavLogo from "../navLogo/NavLogo";
import { SearchContext } from "../../contexts/SearchContext";
import { useSelector } from "react-redux";

const DesktopNavigation = () => {
  const { categories } = useContext(CategoriesContext);
  const { setSearchKeyword, dialogSearch, setDialogSearch } =
    useContext(SearchContext);

  const { totalItemsInCart } = useSelector((store) => store.cart);

  const navigate = useNavigate();

  const setSearchAndNavigate = (e) => {
    e.preventDefault();
    setSearchKeyword(dialogSearch);

    navigate(`/search/${dialogSearch}`);

    setDialogSearch(""); // probability or use ref on input
  };

  return (
    <div className="desktop-navigation">
      <NavLogo />

      <ul className="desktop-navigation__links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="desktop-navigation__links--category">
          <span className="desktop-navigation__links--category_trigger">
            Category <FiChevronDown />
          </span>
          <ul className="desktop-navigation__links--category_dropdown">
            {categories &&
              categories.map((category) => (
                <li key={category._id}>
                  <NavCategoryLink data={category} />
                </li>
              ))}
          </ul>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div className="desktop-navigation__right">
        <form
          className="desktop-navigation__right--search"
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

        <Link to="/" className="desktop-navigation__right--account">
          <AiOutlineUser />
        </Link>

        <Link to="cart" className="desktop-navigation__right--cart">
          <AiOutlineShoppingCart />
          <span className="desktop-navigation__right--cart_count">
            {totalItemsInCart}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DesktopNavigation;
