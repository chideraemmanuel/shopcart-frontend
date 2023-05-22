import React from "react";
import "./EmptyCart.scss";
import emptyCart from "../../assets/empty-cart.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EmptyCart = () => {
  return (
    <motion.div
      className="empty-cart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="empty-cart__image">
        <img src={emptyCart} alt="Empty Cart" />
      </div>

      <div className="empty-cart__text">
        <h2 className="empty-cart__text--header">
          There are no items in your cart
        </h2>
        <Link to="/" className="empty-cart__text--button">
          Shop now
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
