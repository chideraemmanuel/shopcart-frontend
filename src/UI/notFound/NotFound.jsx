import React from "react";
import "./NotFound.scss";
import notFoundImage from "../../assets/page-not-found.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="not-found__image">
        <img src={notFoundImage} alt="Page Not Found" />
      </div>

      <div className="not-found__info">
        <h2 className="not-found__info--header">Page not found!</h2>
        <span className="not-found__info--text">
          Could not find the requested page.
        </span>
        <Link to="/" className="not-found__info--button">
          Back to homepage
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
