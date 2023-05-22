import React, { useContext } from "react";
import "./RootLayout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../UI/navbar/Navbar";
import SearchDialog from "../../components/searchDialog/SearchDialog";
import { SearchContext } from "../../contexts/SearchContext";
import Footer from "../../UI/footer/Footer";

const RootLayout = () => {
  const { dialogSearchResults } = useContext(SearchContext);

  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <main className="main">
        <SearchDialog data={dialogSearchResults} />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
