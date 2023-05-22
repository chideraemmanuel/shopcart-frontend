import React from "react";
import "./CartItem.scss";
import { FaTrash } from "react-icons/fa";
import { urlFor } from "../../client";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice";
import {
  syncDecreaseItemQuantityValues,
  syncIncreaseItemQuantityValues,
  syncRemoveFromCartValues,
} from "../../redux/features/productsSlice";

const CartItem = ({ productName, image, Price, _id, quantityInCart }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <div className="cart-item__info--image">
          <img src={urlFor(image)} alt={productName} />
        </div>
        <div className="cart-item__info--text">
          <h3>{productName}</h3>
          <span>${Price}</span>
        </div>
      </div>

      <div className="cart-item__actions">
        <div className="cart-item__actions--quantity">
          <button
            className="decrease"
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
            className="increase"
            onClick={() => {
              dispatch(increaseItemQuantity({ _id }));
              dispatch(syncIncreaseItemQuantityValues({ _id }));
            }}
          >
            +
          </button>
        </div>
        <FaTrash
          onClick={() => {
            dispatch(removeFromCart({ _id, productName }));
            dispatch(syncRemoveFromCartValues({ _id }));
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
