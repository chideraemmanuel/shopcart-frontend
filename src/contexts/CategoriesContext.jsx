import { createContext, useEffect, useState } from "react";
import { client } from "../client";

export const CategoriesContext = createContext();

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch("*[_type == 'category']").then((data) => setCategories(data));
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
