import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";
import { urlFor } from "../../client";

const Category = ({ categoryName, categoryImage }) => {
  return (
    <Link to={`/categories/${categoryName}`} className="category">
      <div className="category__image">
        <img src={urlFor(categoryImage)} alt={categoryName} className="" />
      </div>
      <div className="category__hr"></div>
      <span className="category__name">{categoryName}</span>
    </Link>
  );
};

export default Category;
