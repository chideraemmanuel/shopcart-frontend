import React from "react";
import "./FetchError.scss";
import fetchErrorImage from "../../assets/error.svg";
import { motion } from "framer-motion";

const FetchError = ({ error }) => {
  return (
    <motion.div
      className="fetch-error"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="fetch-error__image">
        <img src={fetchErrorImage} alt="Fetch Error" />
      </div>

      <div className="fetch-error__info">
        <h2 className="fetch-error__info--header">
          {error.isNetworkError ? "Network Error" : "Server Error"}
        </h2>
        <span className="fetch-error__info--text">
          {error.isNetworkError
            ? "Please check your network connection"
            : "Could not fetch resources"}
        </span>
        <button className="fetch-error__info--button" onClick={() => {}}>
          Retry
        </button>
      </div>
    </motion.div>
  );
};

export default FetchError;
