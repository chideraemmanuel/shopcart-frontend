import React from "react";
import "./ItemCard.scss";
import { Link } from "react-router-dom";
import { urlFor } from "../../client";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cartSlice";
import {
  syncAddToCartValues,
  syncRemoveFromCartValues,
} from "../../redux/features/productsSlice";

import { motion } from "framer-motion";

const ItemCard = ({
  allItemDetails, // passed as prop specifically for dispatch
  productName,
  image,
  specifications,
  Price,
  _id,
  inCart, // added when updateProducts action is performed
}) => {
  const dispatch = useDispatch();

  // const {  } = useSelector(store => store.cart)

  return (
    <motion.div
      className="item-card-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link to={`/products/${_id}`} className="item-card">
        <div className="item-card__image">
          <img src={urlFor(image)} alt={productName} className="" />
        </div>
        <div className="item-card__hr"></div>
        <div className="item-card__details">
          <h3 className="item-card__details--title">{productName}</h3>
          <span className="item-card__details--price">${Price}</span>
        </div>
      </Link>
      {!inCart ? (
        <button
          className="item-card-container__button"
          onClick={() => {
            dispatch(addToCart(allItemDetails));
            dispatch(syncAddToCartValues({ _id }));
          }}
        >
          Add to cart
        </button>
      ) : (
        <button
          className="item-card-container__button remove"
          onClick={() => {
            dispatch(removeFromCart({ _id, productName }));
            dispatch(syncRemoveFromCartValues({ _id, productName }));
          }}
        >
          Remove from cart
        </button>
      )}
    </motion.div>
  );
};

export default ItemCard;
