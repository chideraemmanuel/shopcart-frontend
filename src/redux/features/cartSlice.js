import { createSlice } from "@reduxjs/toolkit";

import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";

const initialState = {
  itemsInCart: [],
  totalItemsInCart: 0,
  subtotal: 0,
  discount: 0,
  deliveryFee: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedItem = { ...action.payload, inCart: true, quantityInCart: 1 };

      // CHECK IF ITEM IS ALREADY IN CART
      const itemCheck = state.itemsInCart.find(
        (item) => item._id === action.payload._id
      );

      if (itemCheck) {
        return;
      }

      state.itemsInCart.push(addedItem);

      toast.success(`${action.payload.productName} added to cart`);
    },
    removeFromCart: (state, action) => {
      // SELECT REMOVED ITEM AND CHANGE *INCART* AND *QUANTITY* VALUES
      const removedItem = state.itemsInCart.find(
        (item) => item._id === action.payload._id
      );

      removedItem.inCart = false;
      removedItem.quantityInCart = 0;

      // FILTER ITEMS IN CART
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item._id !== action.payload._id
      );

      toast.error(`${action.payload.productName} removed from cart`);
    },
    increaseItemQuantity: (state, action) => {
      const itemToIncrease = state.itemsInCart.find(
        (item) => item._id === action.payload._id
      );
      itemToIncrease.quantityInCart += 1;
    },
    decreaseItemQuantity: (state, action) => {
      const itemToDecrease = state.itemsInCart.find(
        (item) => item._id === action.payload._id
      );
      itemToDecrease.quantityInCart -= 1;
    },
    clearCart: (state) => {
      state.itemsInCart.forEach((item) => {
        item.inCart = false;
        item.quantityInCart = 0;
      });
      state.itemsInCart = [];

      toast.success("Your cart has been cleared");
    },
    calculateTotals: (state) => {
      const totalItemsInCart = state.itemsInCart.reduce((total, item) => {
        return total + item.quantityInCart;
      }, 0);
      const subtotal = state.itemsInCart.reduce((total, item) => {
        return total + item.quantityInCart * item.Price;
      }, 0);

      state.totalItemsInCart = totalItemsInCart;
      state.subtotal = subtotal;
    },
    checkoutCart: () => {
      swal({
        title: "Order placed!",
        text: "Your item is on its way.",
        icon: "success",
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  calculateTotals,
  checkoutCart,
} = cartSlice.actions;

export default cartSlice.reducer;
