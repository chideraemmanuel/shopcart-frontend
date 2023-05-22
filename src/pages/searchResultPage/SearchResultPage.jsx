import React, { useContext, useEffect } from "react";
import "./SearchResultPage.scss";
import Showcase from "../../UI/showcase/Showcase";
import { SearchContext } from "../../contexts/SearchContext";
import NoSearchResult from "../../components/noSearchResult/NoSearchResult";

const SearchResultPage = () => {
  const { searchResults } = useContext(SearchContext);

  useEffect(() => {
    scrollUp();
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="search-result-page">
      {!searchResults || (searchResults.length < 1 && <NoSearchResult />)}

      {searchResults.length > 0 && (
        <>
          <span className="search-result-page__header">Search Results:</span>
          <Showcase data={searchResults} />
        </>
      )}
    </div>
  );
};

export default SearchResultPage;
