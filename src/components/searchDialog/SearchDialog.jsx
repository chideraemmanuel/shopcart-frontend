import React, { useContext } from "react";
import "./SearchDialog.scss";
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext";
import { urlFor } from "../../client";

const SearchDialog = ({ data: products }) => {
  const { setDialogSearch, setMobileSearchActive } = useContext(SearchContext);

  return (
    <>
      {products.length > 0 && (
        <div className="search-dialog">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              className="search-dialog__product-link"
              onClick={() => {
                setDialogSearch("");
                setMobileSearchActive(false);
              }}
            >
              <img src={urlFor(product.image)} alt={product.productName} />
              <span>{product.productName}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchDialog;
