import React from "react";
import "./NoSearchResult.scss";
import noSearchResult from "../../assets/no-search-result.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NoSearchResult = () => {
  return (
    <motion.div
      className="no-search-result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="no-search-result__image">
        <img src={noSearchResult} alt="no search result" />
      </div>

      <div className="no-search-result__text">
        <h2 className="no-search-result__text--header">
          No results for your search. Try searching for something else, or...
        </h2>
        <Link to="/" className="no-search-result__text--button">
          Go back to homepage
        </Link>
      </div>
    </motion.div>
  );
};

export default NoSearchResult;
