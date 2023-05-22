import React, { useContext } from "react";
import "./MobileSearch.scss";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const {
    setMobileSearchActive,
    setSearchKeyword,
    dialogSearch,
    setDialogSearch,
  } = useContext(SearchContext);

  const navigate = useNavigate();

  const setSearchAndNavigate = (e) => {
    e.preventDefault();
    setSearchKeyword(dialogSearch);
    setMobileSearchActive(false);

    navigate(`/search/${dialogSearch}`);

    setDialogSearch("");
  };

  return (
    <form className="mobile-search" onSubmit={(e) => setSearchAndNavigate(e)}>
      <AiOutlineArrowLeft onClick={() => setMobileSearchActive(false)} />
      <div className="mobile-search__input">
        <input
          type="text"
          placeholder="Search Products..."
          autoFocus
          value={dialogSearch}
          onChange={(e) => setDialogSearch(e.target.value)}
        />
        <AiOutlineSearch />
      </div>
    </form>
  );
};

export default MobileSearch;
