import React from "react";
import "./CartPage.scss";
import CartItem from "../../components/cartItem/CartItem";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../components/emptyCart/EmptyCart";
import { checkoutCart, clearCart } from "../../redux/features/cartSlice";
import { syncClearCartValues } from "../../redux/features/productsSlice";

const CartPage = () => {
  const { itemsInCart, subtotal, discount, deliveryFee } = useSelector(
    (store) => store.cart
  );

  const dispatch = useDispatch();

  return (
    <>
      {itemsInCart.length === 0 && <EmptyCart />}

      {itemsInCart.length > 0 && (
        <div className="cart-page">
          <div>
            <div className="cart-page__cart">
              <span>Items in cart:</span>
              <div className="cart-page__cart--items">
                {itemsInCart.map((item) => (
                  <CartItem {...item} key={item._id} />
                ))}
              </div>

              <button
                className="cart-page__cart--clear-button"
                onClick={() => {
                  dispatch(clearCart());
                  dispatch(syncClearCartValues());
                }}
              >
                Clear cart
              </button>
            </div>

            <div className="summary">
              <span>Summary</span>
              <div className="cart-page__total">
                <div className="cart-page__total--coupon">
                  <span>Have a coupon code? Enter here.</span>
                  <div>
                    <input type="text" className="" />
                    <FaCheckCircle />
                  </div>
                </div>
                <div className="cart-page__total--table">
                  <div>
                    <p>Subtotal:</p>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div>
                    <p>Delivery fee:</p>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div>
                    <p>Discount:</p>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="cart-page__total--hr"></div>

                <div className="cart-page__total--total">
                  <p>Total:</p>
                  <span>${(subtotal + deliveryFee + discount).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-page__buttons">
            <Link to="/">Continue shopping</Link>
            <button
              onClick={() => {
                dispatch(checkoutCart());
                dispatch(clearCart());
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
