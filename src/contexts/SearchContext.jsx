import { createContext, useEffect, useState } from "react";
import { client } from "../client";

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [mobileSearchActive, setMobileSearchActive] = useState(false);

  const [dialogSearchResults, setDialogSearchResults] = useState([]);
  const [dialogSearch, setDialogSearch] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[ [productName] match ["${searchKeyword}"]]`)
      .then((data) => setSearchResults(data));
  }, [searchKeyword]);

  useEffect(() => {
    client
      .fetch(`*[ [productName] match ["${dialogSearch}"]]`)
      .then((data) => setDialogSearchResults(data));
  }, [dialogSearch]);

  return (
    <SearchContext.Provider
      value={{
        mobileSearchActive,
        setMobileSearchActive,
        searchKeyword,
        setSearchKeyword,
        searchResults,
        setSearchResults,
        dialogSearch,
        setDialogSearch,
        dialogSearchResults,
        setDialogSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
