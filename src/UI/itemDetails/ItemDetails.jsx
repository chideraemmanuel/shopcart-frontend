import React from "react";
import "./ItemDetails.scss";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice";
import {
  syncAddToCartValues,
  syncDecreaseItemQuantityValues,
  syncIncreaseItemQuantityValues,
  syncRemoveFromCartValues,
} from "../../redux/features/productsSlice";
import { Link } from "react-router-dom";

const ItemDetails = ({
  itemData,
  productName,
  image,
  Price,
  _id,
  description,
  quantityInCart,
  inCart,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {itemData && (
        <section className="item-details">
          <div className="item-details__image">
            <img src={urlFor(image)} alt={productName} />
          </div>

          <div className="item-details__details">
            <div className="item-details__details--info">
              <h1>{productName}</h1>
              <p>{description}</p>
              <span>${Price}</span>
            </div>

            <div className="item-details__details--hr"></div>

            <div className="item-details__details--actions">
              <div className="item-details__details--actions_quantity">
                {quantityInCart > 0 && (
                  <div>
                    <button
                      onClick={() => {
                        if (quantityInCart === 1) {
                          dispatch(removeFromCart({ _id, productName }));
                          dispatch(syncRemoveFromCartValues({ _id }));
                        } else {
                          dispatch(decreaseItemQuantity({ _id }));
                          dispatch(syncDecreaseItemQuantityValues({ _id }));
                        }
                      }}
                    >
                      -
                    </button>
                    <span>{quantityInCart}</span>
                    <button
                      onClick={() => {
                        dispatch(increaseItemQuantity({ _id }));
                        dispatch(syncIncreaseItemQuantityValues({ _id }));
                      }}
                    >
                      +
                    </button>
                  </div>
                )}
                <p>
                  Only <span>few items</span> left. Don't miss it!
                </p>
              </div>

              <div className="item-details__details--actions_buttons">
                <Link to="/cart" onClick={() => dispatch(addToCart(itemData))}>
                  Buy now
                </Link>
                {!inCart ? (
                  <button
                    className="add"
                    onClick={() => {
                      dispatch(addToCart(itemData));
                      dispatch(syncAddToCartValues({ _id }));
                    }}
                  >
                    Add to cart
                  </button>
                ) : (
                  <button
                    className="remove"
                    onClick={() => {
                      dispatch(removeFromCart({ _id, productName }));
                      dispatch(syncRemoveFromCartValues({ _id }));
                    }}
                  >
                    Remove from cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemDetails;
