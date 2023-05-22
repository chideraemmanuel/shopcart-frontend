import React from "react";
import "./SlideItem.scss";
import { Link } from "react-router-dom";
import { urlFor } from "../../client";

const SlideItem = ({ productName, image, specifications, Price, _id }) => {
  const startingPrice = Price;

  return (
    <Link to={`/products/${_id}`} className="slide-item">
      <div className="slide-item__image">
        <img src={urlFor(image)} alt={productName} className="" />
      </div>
      <div className="slide-item__hr"></div>
      <div className="slide-item__details">
        <h3 className="slide-item__details--title">{productName}</h3>
        <span className="slide-item__details--price">${startingPrice}</span>
      </div>
    </Link>
  );
};

export default SlideItem;
